import React, { useCallback, useEffect, useRef } from 'react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { Z3_Wrapper } from './z3/z3-api';
import { FILES } from './vfs-content';
import classNames from 'classnames';
import { Panel, PanelGroup } from 'react-resizable-panels';
import { useExecCode } from './hooks/useExecCode';
import { useCodeExecState } from './state/codeExec';
import { useLayoutState } from './state/layout';
import { MyPanelResizeHandle } from './components/panels';
import { LOCAL_STORAGE_KEYS, WORKSPACE_PANEL_GROUP_ID } from './constants';
import { OutputPanel } from './components/outputPanel/outputPanel';
import { EditorPanel } from './components/codeEditorPanel/codeEditorPanel';
import { FilesPanel } from './components/filesPanel/filesPanel';
import { useSelectedFile } from './hooks/useSelectedFile';
import { useAppKeybinds } from './hooks/useAppKeybinds';
import { CONSOLE_INTERCEPTOR } from './utils/consoleIntercept';

// TODO [LOW] add support for back button to switch files
// TODO [IGNORE] optimize localstorage save

// https://microsoft.github.io/z3guide/programming/Parameters/#smt
// z3.z3.setParam('dump_models', true);

interface Props {
  z3: Z3_Wrapper;
}

export const App = ({ z3 }: Props) => {
  const selectedFile = useSelectedFile(FILES);

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
    runCode({ filename: selectedFile.filePath, code });
  }, [abortRun, runCode, execState, selectedFile.filePath]);

  const layout = useLayoutState((s) => s.layout);

  const onMonacoMount = useAppKeybinds(execEditorCode);

  useEffect(() => {
    CONSOLE_INTERCEPTOR.enabled = true;
  }, []);

  return (
    <main
      className={classNames(
        'w-full min-h-svh relative font-mono bg-panelSpacing'
      )}
    >
      <PanelGroup direction="horizontal" className="min-h-svh max-h-svh">
        <FilesPanel activeFile={selectedFile} />

        <MyPanelResizeHandle vertical />

        <Panel>
          <PanelGroup
            id={WORKSPACE_PANEL_GROUP_ID}
            direction={layout === 'two-columns' ? 'horizontal' : 'vertical'}
            className={classNames(layout === 'two-columns' ? '' : 'min-h-svh')}
          >
            <EditorPanel
              activeFile={selectedFile}
              z3={z3}
              editorRef={editorRef}
              onCodeExec={execEditorCode}
              onEditorMount={onMonacoMount}
            />

            <MyPanelResizeHandle vertical={layout === 'two-columns'} />

            <OutputPanel key={`output-panel-${layout}`} />
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </main>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).discardLocalVirtualFileSystem = () => {
  window.localStorage.removeItem(LOCAL_STORAGE_KEYS.fileSystem);
  window.location.reload();
};
