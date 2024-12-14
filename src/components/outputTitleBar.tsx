import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { CodeExecState, useCodeExecStateStore } from '../state/codeExec';
import { WithClassName } from '../utils';

interface Props {}

export function TitleBar(p: PropsWithChildren & WithClassName) {
  return (
    <div
      className={classNames(
        p.className,
        'flex items-center justify-between gap-2 px-2 py-1 bg-toolbar'
      )}
    >
      {p.children}
    </div>
  );
}

export function OutputTitleBar(p: Props) {
  const execState = useCodeExecStateStore((s) => s as CodeExecState);

  let text = 'Output';
  if (execState.lastFilename) {
    const stateText = execState.status === 'running' ? ' (running)' : '';
    text = `${text}: ${execState.lastFilename} ${stateText}`;
  }

  return (
    <TitleBar>
      <div className=""></div>

      <h2 className="truncate">{text}</h2>

      <div className="flex gap-2">
        {/* 
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
        */}
      </div>
    </TitleBar>
  );
}

/*
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
*/
