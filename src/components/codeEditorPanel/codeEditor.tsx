import React from 'react';
import Editor from '@monaco-editor/react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { WithClassName } from '../../utils';
import { EditorOnMountFn, EditorOnTextChange } from './types';
import { useVirtualFsFile } from '../../vfs-impl/hooks';

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
  activeFile: string;
  editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor | undefined>;
  onMount?: EditorOnMountFn;
  onEditorChange?: EditorOnTextChange;
}

/**
 * https://codesandbox.io/p/sandbox/multi-model-editor-kugi6?file=%2Fsrc%2FApp.js
 */
export function CodeEditor({
  editorRef,
  activeFile,
  className,
  onMount,
  onEditorChange,
}: Props) {
  const file = useVirtualFsFile(activeFile);

  return (
    <Editor
      // height="100svh"
      height="100%"
      className=""
      wrapperProps={{ className }}
      theme="vs-dark"
      path={activeFile}
      defaultLanguage={file.language}
      defaultValue={file.content}
      options={{ ...OPTIONS, readOnly: file.mode === 'readonly' }}
      onChange={onEditorChange}
      onMount={(editor, monaco) => {
        editorRef.current = editor;

        editor.getModel()?.updateOptions({ tabSize: 2 });

        onMount?.(editor, monaco);
      }}
    />
  );
}
