import React, { useCallback, useRef, useState } from 'react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { Z3_Wrapper } from './z3/z3-api';
import { FILES } from './vfs';
import { evaluateUserZ3Script } from './z3/z3-eval';
import { CodeRunningState, OutputShowState } from './constants';
import { OutputPanel } from './components/outputPanel';
import { CodeEditor } from './components/codeEditor';
import classNames from 'classnames';

// TODO add support for back button to switch files
// TODO h1 - app name
// TODO two-column layout if possible?
// TODO output panels shows current file name or one that is executing?

interface Props {
  z3: Z3_Wrapper;
}

export const App = ({ z3 }: Props) => {
  const file = FILES[0];

  const editorRef = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);

  // useEffect(() => {
  // editorRef.current?.focus();
  // }, [file.name]);

  const [outputShowState, setOutputShowState] =
    useState<OutputShowState>('minimized');

  const [codeExecState, setCodeExecState] = useState<CodeRunningState>('idle');

  const execCode = useCallback(async () => {
    try {
      setCodeExecState('running');

      // show output if needed
      setOutputShowState((state) => (state === 'minimized' ? 'shown' : state));

      // get current text
      const userScriptText = editorRef?.current?.getValue() || '';

      // eval
      // TODO handle stop code exec
      const log = (...args: unknown[]) => console.log('[LOG]', ...args);
      await evaluateUserZ3Script(z3, log, userScriptText);
    } finally {
      setCodeExecState('idle');
    }
  }, [z3]);

  return (
    <main
      className={classNames(
        'w-full max-w-3xl mx-auto min-h-svh',
        'relative flex flex-col font-mono '
      )}
    >
      <OutputPanel
        fileName={file.name}
        shownState={outputShowState}
        codeExecState={codeExecState}
        onCodeExec={execCode}
        onOutputShowToggle={setOutputShowState}
        className="w-full max-w-3xl"
      />

      <CodeEditor file={file} z3={z3} editorRef={editorRef} />
    </main>
  );
};
