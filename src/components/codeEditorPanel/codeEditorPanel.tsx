import React from 'react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { Z3_Wrapper } from '../../z3/z3-api';
import { VfsFile } from '../../vfs';
import { CodeEditor } from './codeEditor';
import classNames from 'classnames';
import { CodeEditorTitleBar } from './codeEditorTitleBar';
import { useLayoutState } from '../../state/layout';
import { MyPanel } from '../panels';
import { OnCodeExec } from '../runCodeBtn';

interface Props {
  file: VfsFile;
  z3: Z3_Wrapper;
  onCodeExec: OnCodeExec;
  editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor | undefined>;
}

export const EditorPanel = ({ file, z3, onCodeExec, editorRef }: Props) => {
  const layout = useLayoutState((s) => s.layout);

  return (
    <MyPanel
      minSize={10}
      className={classNames(
        'bg-vscodebg',
        layout === 'two-columns' ? 'rounded-r-sm' : 'rounded-b-sm'
      )}
    >
      {/* TODO add files toggle */}
      <CodeEditorTitleBar filename={file.name} onCodeExec={onCodeExec} />
      <CodeEditor file={file} z3={z3} editorRef={editorRef} />
    </MyPanel>
  );
};
