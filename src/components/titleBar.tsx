import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useLayoutState } from '../state/layout';
import { ArrayElement, typesafeObjectKeys, WithClassName } from '../utils';
import { MyTooltip, TooltipPlacement } from './myTooltip';
import * as icons from './icons';
import { KEY_BIND_LABEL } from '../hooks/useAppKeybinds';

const ICON_NAMES = typesafeObjectKeys(icons);
type IconName = ArrayElement<typeof ICON_NAMES>;

type Props = PropsWithChildren &
  WithClassName & {
    isH1?: boolean;
    leftSection?: JSX.Element;
    title: string | JSX.Element;
    rightSection?: JSX.Element;
  };

export function TitleBar(p: Props) {
  const TitleEl = p.isH1 ? 'h2' : 'h1';
  return (
    <div
      className={classNames(
        p.className,
        'flex items-center justify-between gap-2 px-2 py-1 bg-toolbar'
      )}
    >
      {p.leftSection || <div />}
      <TitleEl className="truncate">{p.title}</TitleEl>
      {p.rightSection || <div />}
    </div>
  );
}

export const ToolbarIcons = (p: PropsWithChildren) => (
  <div className="flex gap-2">{p.children}</div>
);

export function ToolbarIconBtn(p: {
  label: string;
  tooltip?: string;
  icon: IconName;
  iconClassName?: string;
  tooltipPlacement: TooltipPlacement;
  onClick: () => void;
}) {
  const iconSize = '30px';
  const Icon = icons[p.icon];

  return (
    <MyTooltip
      placement={p.tooltipPlacement || 'bottomRight'}
      text={p.tooltip || p.label}
    >
      <button
        type="button"
        aria-label={p.label}
        onClick={p.onClick}
        className="transition-colors hover:text-accent-400"
      >
        <Icon size={iconSize} className={p.iconClassName} />
      </button>
    </MyTooltip>
  );
}

export function ToggleLayoutBtn() {
  const layout = useLayoutState((s) => s.layout);
  const toggleColumnLayout = useLayoutState((s) => s.toggleColumnLayout);

  return (
    <ToolbarIconBtn
      label={
        layout === 'single-column'
          ? 'Switch to two column layout'
          : 'Switch to single column layout'
      }
      icon="LayoutToggleIcon"
      iconClassName={classNames(
        'transition-transform',
        layout === 'single-column' ? 'rotate-90' : ''
      )}
      onClick={toggleColumnLayout}
      tooltipPlacement="bottomLeft"
    />
  );
}

export function ToggleFilesSidebarBtn() {
  const showFilesPanel = useLayoutState((s) => s.showFilesPanel);
  const toggleShowFilesPanel = useLayoutState((s) => s.toggleShowFilesPanel);
  const label = showFilesPanel ? 'Hide files panel' : 'Show files panel';

  return (
    <ToolbarIconBtn
      label={label}
      tooltip={`${label} ${KEY_BIND_LABEL.toggleFilesSidebar}`}
      // icon={showFilesPanel ? 'SquareIcon' : 'SidebarIcon'}
      icon="SidebarIcon"
      onClick={toggleShowFilesPanel}
      tooltipPlacement="bottomLeft"
      iconClassName="rotate-180"
    />
  );
}

export function MiniOrMaximizeOutputPanelBtn(p: {
  isCollapsed: boolean;
  onClick: () => void;
}) {
  return (
    <ToolbarIconBtn
      label={p.isCollapsed ? 'Expand output panel' : 'Collapse output panel'}
      icon="ChevronDownIcon"
      onClick={p.onClick}
      tooltipPlacement="bottomRight"
      iconClassName={classNames(
        'transition-transform',
        p.isCollapsed ? 'rotate-180' : ''
      )}
    />
  );
}
