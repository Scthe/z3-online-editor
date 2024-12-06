import classNames from 'classnames';
import React from 'react';
import { CodeRunningState, OutputShowState } from '../constants';
import {
  MinimalizeIcon,
  MirrorIcon,
  MaximizeIcon,
  CancelIcon,
  PlayIcon,
} from './icons';

export type OnCodeExec = () => void;
export type OnOutputShowToggle = (t: OutputShowState) => void;

interface Props {
  fileName: string;
  shownState: OutputShowState;
  codeExecState: CodeRunningState;
  onCodeExec: OnCodeExec;
  onOutputShowToggle: OnOutputShowToggle;
}

export function TitleBar(p: Props) {
  return (
    <div
      className={classNames(
        'flex items-center justify-between gap-2 px-2 py-1 bg-toolbar'
      )}
    >
      <div className="">
        <RunCodeBtn codeExecState={p.codeExecState} onCodeExec={p.onCodeExec} />
      </div>

      <h2 className="truncate">{p.fileName}</h2>

      <div className="flex gap-2">
        <OutputChangeSizeBtn
          activeState={p.shownState}
          setShownState={p.onOutputShowToggle}
          label="Minimize"
          icon={MinimalizeIcon}
          state="minimized"
        />
        <OutputChangeSizeBtn
          activeState={p.shownState}
          setShownState={p.onOutputShowToggle}
          label="Show output"
          icon={MirrorIcon}
          state="shown"
          iconClassName="rotate-90"
        />
        <OutputChangeSizeBtn
          activeState={p.shownState}
          setShownState={p.onOutputShowToggle}
          label="Make fullscreen"
          icon={MaximizeIcon}
          state="fullscreen"
        />
      </div>
    </div>
  );
}

function RunCodeBtn(p: {
  codeExecState: CodeRunningState;
  onCodeExec: OnCodeExec;
}) {
  const runIconSize = '15px';
  const isRunning = p.codeExecState === 'running';

  return (
    <button
      className={classNames(
        'px-2 text-toolbar transition-colors rounded-md flex gap-1 items-center',
        isRunning
          ? 'bg-red-500 hover:bg-red-600 animate-pulse'
          : 'bg-green-500 hover:bg-green-600'
      )}
      aria-label={isRunning ? 'Stop running program' : 'Execute the code'}
      onClick={p.onCodeExec}
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

function OutputChangeSizeBtn(p: {
  label: string;
  activeState: OutputShowState;
  icon: typeof MaximizeIcon | typeof MinimalizeIcon | typeof MirrorIcon;
  iconClassName?: string;
  state: OutputShowState;
  setShownState: (t: OutputShowState) => void;
}) {
  // TODO tooltip
  if (p.activeState === p.state) return null;

  const iconSize = '20px';
  const Icon = p.icon;

  return (
    <button
      type="button"
      aria-label={p.label}
      onClick={() => p.setShownState(p.state)}
      className="transition-colors hover:text-accent-300"
    >
      <Icon size={iconSize} className={p.iconClassName} />
    </button>
  );
}
