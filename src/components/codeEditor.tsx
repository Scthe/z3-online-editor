import React from 'react';
import Editor from '@monaco-editor/react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { Z3_Wrapper } from '../z3/z3-api';
import { injectZ3IntoMonacoEditor } from '../z3/z3-monaco';
import { VfsFile } from '../vfs';

// TODO remove monaco scroll, it's distracting. Use whole page's scroll

interface Props {
  file: VfsFile;
  z3: Z3_Wrapper;
  editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor | undefined>;
}

/**
 * https://codesandbox.io/p/sandbox/multi-model-editor-kugi6?file=%2Fsrc%2FApp.js
 */
export function CodeEditor({ file, z3, editorRef }: Props) {
  return (
    <Editor
      // height="100svh"
      height="100%"
      className=""
      wrapperProps={{ className: 'grow my-2' }}
      theme="vs-dark"
      path={file.name}
      defaultLanguage={file.language}
      defaultValue={file.value}
      onMount={(editor, monaco) => {
        editorRef.current = editor;

        injectZ3IntoMonacoEditor(z3, monaco);
      }}
      options={{
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
      }}
    />
  );
}
