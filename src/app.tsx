import React, { useCallback, useRef } from 'react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { Z3_Wrapper } from './z3/z3-api';
import { FILES } from './vfs';
import classNames from 'classnames';
import { PanelGroup } from 'react-resizable-panels';
import { useExecCode } from './hooks/useExecCode';
import { useCodeExecState } from './state/codeExec';
import { useLayoutState } from './state/layout';
import { MyPanelResizeHandle } from './components/panels';
import { MAIN_PANEL_GROUP_ID } from './constants';
import { OutputPanel } from './components/outputPanel/outputPanel';
import { EditorPanel } from './components/codeEditorPanel/codeEditorPanel';

// TODO add support for back button to switch files
// TODO h1 - app name
// TODO keyboard shortcuts
// TODO persist the user's file to localstorage
// TODO rename: z3-online-editor

interface Props {
  z3: Z3_Wrapper;
}

export const App = ({ z3 }: Props) => {
  const file = FILES[0];

  const editorRef = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);

  // useEffect(() => {
  // editorRef.current?.focus();
  // }, [file.name]);

  const execState = useCodeExecState((s) => s.status);
  const { abortRun, runCode } = useExecCode(z3);

  const execEditorCode = useCallback(async () => {
    if (execState === 'running') {
      abortRun();
      return;
    }

    // get current text
    const code = editorRef?.current?.getValue() || '';
    runCode({ filename: file.name, code });
  }, [abortRun, execState, file.name, runCode]);

  const layout = useLayoutState((s) => s.layout);

  return (
    <main
      className={classNames(
        'w-full min-h-svh relative font-mono bg-panelSpacing'
      )}
    >
      <PanelGroup
        id={MAIN_PANEL_GROUP_ID}
        direction={layout === 'two-columns' ? 'horizontal' : 'vertical'}
        className={classNames(layout === 'two-columns' ? '' : 'min-h-svh')}
      >
        <EditorPanel
          file={file}
          z3={z3}
          editorRef={editorRef}
          onCodeExec={execEditorCode}
        />

        <MyPanelResizeHandle vertical={layout === 'two-columns'} />

        <OutputPanel key={`output-panel-${layout}`} />
      </PanelGroup>
    </main>
  );
};
