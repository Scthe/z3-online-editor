import React from 'react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { Z3_Wrapper } from '../../z3/z3-api';
import { CodeEditor } from './codeEditor';
import classNames from 'classnames';
import { CodeEditorTitleBar } from './codeEditorTitleBar';
import { useLayoutState } from '../../state/layout';
import { MyPanel } from '../panels';
import { OnCodeExec } from '../runCodeBtn';
import { SelectedFile } from '../../hooks/useSelectedFile';
import { EditorOnMountFn } from './types';

interface Props {
  z3: Z3_Wrapper;
  activeFile: SelectedFile;
  editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor | undefined>;
  onCodeExec: OnCodeExec;
  onEditorMount?: EditorOnMountFn;
}

export const EditorPanel = ({
  editorRef,
  activeFile,
  z3,
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
        z3={z3}
        editorRef={editorRef}
        onMount={onEditorMount}
      />
    </MyPanel>
  );
};
