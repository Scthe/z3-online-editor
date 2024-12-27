import React from 'react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { CodeEditor } from './codeEditor';
import classNames from 'classnames';
import { CodeEditorTitleBar } from './codeEditorTitleBar';
import { useLayoutState } from '../../state/layout';
import { MyPanel } from '../panels';
import { OnCodeExec } from '../runCodeBtn';
import { SelectedFile } from '../../hooks/useSelectedFile';
import { EditorOnMountFn, EditorOnTextChange } from './types';

interface Props {
  activeFile: SelectedFile;
  editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor | undefined>;
  onCodeExec: OnCodeExec;
  onEditorMount?: EditorOnMountFn;
  onEditorChange?: EditorOnTextChange;
}

export const EditorPanel = ({
  editorRef,
  activeFile,
  onCodeExec,
  onEditorMount,
}: Props) => {
  const layout = useLayoutState((s) => s.layout);

  return (
    <MyPanel
      minSize={10}
      className={classNames(
        'bg-vscodebg',
        layout === 'two-columns' ? 'rounded-r-sm' : 'rounded-b-sm'
      )}
    >
      <CodeEditorTitleBar
        filename={activeFile.filePath}
        onCodeExec={onCodeExec}
      />
      <CodeEditor
        activeFile={activeFile}
        editorRef={editorRef}
        onMount={onEditorMount}
      />
    </MyPanel>
  );
};
