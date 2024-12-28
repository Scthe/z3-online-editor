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
      CONSOLE_INTERCEPTOR.enabled = false;
      abortCtrlRef.current?.();
      abortCtrlRef.current = undefined;
      CONSOLE_INTERCEPTOR.enabled = true;
    } catch (_e) {
      //
    }
  }, []);

  const runCode = useCallback(
    async (file: File) => {
      try {
        abortCurrentProcess();
        demarkatePrintRuns(addLogEntry, file.filename);
        setExecState({ status: 'running', lastFilename: file.filename });

        // eval
        const { ctx, resultAsync } = startEvalZ3Script(z3, file.code);
        abortCtrlRef.current = () => {
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
  filename: string
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
    args: ['--- Running:', `'${filename}'`],
  });
  logger({
    level: 'meta',
    args: ['--- (Refresh the page if the interpreter gets stuck)'],
  });
};

type ExtraHints = {
  check: (msg: string) => boolean;
  msg: string;
};

const HINTS: ExtraHints[] = [
  {
    check: isTypescriptError,
    msg: 'Are you trying to write TypeScript? Please use JavaScript only.',
  },
  {
    check: isForgottenAwaitError,
    msg: 'Did you forgot await?',
  },
];

CONSOLE_INTERCEPTOR.add(({ args }) => {
  if (!Array.isArray(args) || !(args[0] instanceof SyntaxError)) {
    return;
  }

  const msg = args[0].message;
  const shownHints = HINTS.filter((hint) => hint.check(msg));
  // console.log({ shownHints });

  if (shownHints.length === 0) return;

  // prevent recursion just in case
  setTimeout(() => {
    shownHints.forEach((hint) => console.warn(hint.msg));
  }, 0);
});

function isTypescriptError(errMsg: string): boolean {
  const errorParts = [
    // CODE: "const a = (A:1) => { }"
    'missing ) in parenthetical', // ff
    'missing ) after formal parameters', // ff
    "Unexpected token ':'", // Chrome
  ];
  return errorParts.some((part) => errMsg.includes(part));
}

function isForgottenAwaitError(errMsg: string): boolean {
  return errMsg.includes("can't execute multiple async functions");
}
