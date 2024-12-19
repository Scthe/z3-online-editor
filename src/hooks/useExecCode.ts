import { useCallback, useRef } from 'react';
import { useCodeExecState } from '../state/codeExec';
import { startEvalZ3Script } from '../z3/z3-eval';
import { Z3_Wrapper } from '../z3/z3-api';
import { useLogs } from '../state/logs';
import {
  CONSOLE_INTERCEPTOR,
  ConsoleInterceptorParams,
} from '../utils/consoleIntercept';

interface File {
  filename: string;
  code: string;
}

type AbortCtrl = () => void;

export function useExecCode(z3: Z3_Wrapper) {
  const setExecState = useCodeExecState((s) => s.setExecState);
  const addLogEntry = useLogs((s) => s.addLogEntry);

  const abortCtrlRef = useRef<AbortCtrl | undefined>(undefined);

  const abortCurrentProcess = useCallback(() => {
    try {
      abortCtrlRef.current?.();
      abortCtrlRef.current = undefined;
    } catch (_e) {
      //
    }
  }, []);

  const runCode = useCallback(
    async (file: File) => {
      try {
        abortCurrentProcess();
        demarkatePrintRuns(addLogEntry, file);
        setExecState({ status: 'running', lastFilename: file.filename });

        // eval
        CONSOLE_INTERCEPTOR.enabled = true;
        const { ctx, resultAsync } = startEvalZ3Script(z3, file.code);
        abortCtrlRef.current = () => {
          CONSOLE_INTERCEPTOR.enabled = false;
          ctx.interrupt();
        };

        await resultAsync;
      } catch (e) {
        console.error(e);
      } finally {
        setExecState({ status: 'idle' });
        abortCurrentProcess(); // cancel everything regardless of result
      }
    },
    [abortCurrentProcess, addLogEntry, setExecState, z3]
  );

  return {
    runCode,
    abortRun: useCallback(() => {
      setExecState({ status: 'idle' });
      abortCurrentProcess();
    }, [abortCurrentProcess, setExecState]),
  };
}

const demarkatePrintRuns = (
  logger: (entry: ConsoleInterceptorParams) => void,
  file: File
) => {
  const date = new Date();

  logger({
    level: 'meta',
    args: ['-'.repeat(28)],
  });
  logger({
    level: 'meta',
    args: ['---', date.toJSON().replaceAll('T', ' ')],
  });
  logger({
    level: 'meta',
    args: ['--- Running:', `'${file.filename}'`],
  });
};
