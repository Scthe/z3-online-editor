import React from 'react';
import { CodeExecState, useCodeExecState } from '../../state/codeExec';
import { LayoutToggleIcon } from '../icons';
import { useLayoutState } from '../../state/layout';
import { MyTooltip } from '../myTooltip';
import { TitleBar } from '../panels';

export const OUTPUT_TITLE_BAR_HEIGHT = 32;

export function OutputTitleBar() {
  const execState = useCodeExecState((s) => s as CodeExecState);

  let text = 'Output';
  if (execState.lastFilename) {
    const stateText = execState.status === 'running' ? ' (running)' : '';
    text = `${text}: ${execState.lastFilename} ${stateText}`;
  }

  const layout = useLayoutState();

  return (
    <TitleBar>
      <div className=""></div>

      <h2 className="truncate">{text}</h2>

      <div className="flex gap-2">
        <ToolbarIconBtn
          label={
            layout.layout === 'single-column'
              ? 'Switch to two column layout'
              : 'Switch to two single layout'
          }
          icon={LayoutToggleIcon}
          iconClassName={layout.layout === 'single-column' ? 'rotate-90' : ''}
          onClick={layout.toggleColumnLayout}
        />
        {/* TODO minimize button */}
      </div>
    </TitleBar>
  );
}

function ToolbarIconBtn(p: {
  label: string;
  icon: typeof LayoutToggleIcon;
  iconClassName?: string;
  onClick: () => void;
}) {
  const iconSize = '20px';
  const Icon = p.icon;

  return (
    <MyTooltip placement="bottomRight" text={p.label}>
      <button
        type="button"
        aria-label={p.label}
        onClick={p.onClick}
        className="transition-colors hover:text-accent-300"
      >
        <Icon size={iconSize} className={p.iconClassName} />
      </button>
    </MyTooltip>
  );
}
