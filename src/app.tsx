import React, { useCallback, useEffect, useRef } from 'react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { Z3_Wrapper } from './z3/z3-api';
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
import { injectZ3IntoMonacoEditor } from './z3/z3-monaco';
import { useVirtualFs } from './vfs-impl/hooks';
import { persistVirtualFsFile } from './vfs-impl/persist';

// TODO [HIGH] handle app version upgrade. Should override localStorage files
// TODO [LOW] add support for back button to switch files
// TODO [IGNORE] optimize localstorage save

interface Props {
  z3: Z3_Wrapper;
  initialFile: string;
}

export const App = ({ z3, initialFile }: Props) => {
  const vfs = useVirtualFs();
  const selectedFile = useSelectedFile(initialFile);

  const editorRef = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);

  const execState = useCodeExecState((s) => s.status);
  const { abortRun, runCode } = useExecCode(z3);

  const execEditorCode = useCallback(async () => {
    if (execState === 'running') {
      abortRun();
      return;
    }

    // get current text
    const code = editorRef?.current?.getValue() || '';
    runCode({ filename: selectedFile, code });
  }, [abortRun, runCode, execState, selectedFile]);

  const layout = useLayoutState((s) => s.layout);

  const injectMonacoKeybinds = useAppKeybinds(execEditorCode);

  const onEditorChange = useCallback(
    (value: string | undefined) => {
      value = value || '';
      if (vfs.updateFile(selectedFile, value) === 'ok') {
        persistVirtualFsFile(selectedFile, value);
      }
    },
    [selectedFile, vfs]
  );

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
              editorRef={editorRef}
              onCodeExec={execEditorCode}
              onEditorChange={onEditorChange}
              // WARNING: this fn is called only once
              onEditorMount={(editor, monaco) => {
                injectZ3IntoMonacoEditor(z3, monaco);
                injectMonacoKeybinds(editor, monaco);
              }}
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
