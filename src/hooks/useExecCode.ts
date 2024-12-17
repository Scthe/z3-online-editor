import { useCallback, useRef } from 'react';
import { useCodeExecState } from '../state/codeExec';
import { startEvalZ3Script } from '../z3/z3-eval';
import { Z3_Wrapper } from '../z3/z3-api';
import { useLogs } from '../state/logs';
import { CONSOLE_INTERCEPTOR } from '../utils/consoleIntercept';

interface File {
  filename: string;
  code: string;
}

type AbortCtrl = () => void;

export function useExecCode(z3: Z3_Wrapper) {
  const setExecState = useCodeExecState((s) => s.setExecState);
  const clearLogs = useLogs((s) => s.clearLogs);

  const abortCtrlRef = useRef<AbortCtrl | undefined>(undefined);

  const abortCurrentProcess = useCallback(() => {
    abortCtrlRef.current?.();
    abortCtrlRef.current = undefined;
  }, []);

  const runCode = useCallback(
    async (file: File) => {
      try {
        abortCurrentProcess();
        clearLogs();
        setExecState({ status: 'running', lastFilename: file.filename });

        // TODO show output panel
        // setOutputShowState((state) => (state === 'minimized' ? 'shown' : state));

        // eval
        CONSOLE_INTERCEPTOR.enabled = true;
        const { ctx, resultAsync } = startEvalZ3Script(z3, file.code);
        abortCtrlRef.current = () => {
          CONSOLE_INTERCEPTOR.enabled = false;
          ctx.interrupt();
        };

        await resultAsync;
      } finally {
        setExecState({ status: 'idle' });
        abortCurrentProcess(); // cancel everything regardless of result
      }
    },
    [abortCurrentProcess, clearLogs, setExecState, z3]
  );

  return {
    runCode,
    abortRun: useCallback(() => {
      setExecState({ status: 'idle' });
      abortCurrentProcess();
    }, [abortCurrentProcess, setExecState]),
  };
}
