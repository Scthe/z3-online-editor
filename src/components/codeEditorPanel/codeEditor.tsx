import React, { useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { Z3_Wrapper } from '../../z3/z3-api';
import { injectZ3IntoMonacoEditor } from '../../z3/z3-monaco';
import { SelectedFile } from '../../hooks/useSelectedFile';
import { WithClassName } from '../../utils';
import { persistVirtualFs } from '../../vfs-impl/vfsPersist';
import { isReadOnly } from '../../vfs-content';
import { EditorOnMountFn } from './types';

const OPTIONS: editor.IStandaloneEditorConstructionOptions = {
  // scrollBeyondLastLine: false,
  minimap: { enabled: false },
  dragAndDrop: false,
  readOnly: false,
  wordWrap: 'on',
  // https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IEditorScrollbarOptions.html
  scrollbar: {
    // https://github.com/microsoft/monaco-editor/issues/1875
    // alwaysConsumeMouseWheel: false,
    useShadows: false,
  },
  tabSize: 2,
  autoIndent: 'full',
  detectIndentation: false,
  formatOnType: true,
  formatOnPaste: true,
  insertSpaces: true,
  fixedOverflowWidgets: true,
  readOnlyMessage: {
    value: 'This file is read-only',
    isTrusted: true,
  },
};

interface Props extends WithClassName {
  z3: Z3_Wrapper;
  activeFile: SelectedFile;
  editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor | undefined>;
  onMount?: EditorOnMountFn;
}

const INVALID_FILE_ERROR =
  'ERROR!\n\nError reading file from the virtual filesystem. This should not happen';

/**
 * https://codesandbox.io/p/sandbox/multi-model-editor-kugi6?file=%2Fsrc%2FApp.js
 */
export function CodeEditor({
  activeFile,
  z3,
  className,
  onMount,
  editorRef,
}: Props) {
  const { content, filePath, language, vfs } = activeFile;

  const isReadOnly_ = isReadOnly(activeFile.filePath);
  const defaultContent: string =
    content.status === 'ok' ? content.content : INVALID_FILE_ERROR;

  const onChange = useCallback(
    (value: string | undefined) => {
      if (isReadOnly_) return;
      persistVirtualFs(vfs, filePath, value || '');
    },
    [filePath, isReadOnly_, vfs]
  );

  return (
    <Editor
      // height="100svh"
      height="100%"
      className=""
      wrapperProps={{ className }}
      theme="vs-dark"
      path={filePath}
      defaultLanguage={language}
      defaultValue={defaultContent}
      options={{ ...OPTIONS, readOnly: isReadOnly_ }}
      onChange={onChange}
      onMount={(editor, monaco) => {
        editorRef.current = editor;

        injectZ3IntoMonacoEditor(z3, monaco);

        editor.getModel()?.updateOptions({ tabSize: 2 });

        onMount?.(editor, monaco);
      }}
    />
  );
}
