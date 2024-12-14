import classNames from 'classnames';
import React from 'react';
import { CancelIcon, PlayIcon } from './icons';
import { CodeExecState, useCodeExecStateStore } from '../state/codeExec';

export type OnCodeExec = () => void;

interface Props {
  onCodeExec: OnCodeExec;
}

export function RunCodeBtn({ onCodeExec }: Props) {
  const execState = useCodeExecStateStore((s) => s as CodeExecState);

  const runIconSize = '15px';
  const isRunning = execState.status === 'running';

  return (
    <button
      className={classNames(
        'px-2 text-toolbar transition-colors rounded-md flex gap-1 items-center',
        isRunning
          ? 'bg-red-500 hover:bg-red-600 animate-pulse'
          : 'bg-green-500 hover:bg-green-600'
      )}
      aria-label={isRunning ? 'Stop running program' : 'Execute the code'}
      onClick={onCodeExec}
    >
      {isRunning ? (
        <>
          Stop
          <CancelIcon size={runIconSize} />
        </>
      ) : (
        <>
          Run
          <PlayIcon size={runIconSize} />
        </>
      )}
    </button>
  );
}
