import classNames from 'classnames';
import { OutputLogs } from './outputLogs';
import { MyPanel } from '../panels';
import { useResizablePanelPx } from '../../hooks/useResizablePanelPx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ImperativePanelHandle } from 'react-resizable-panels';
import { useLayoutState } from '../../state/layout';
import { WORKSPACE_PANEL_GROUP_ID } from '../../constants';
import { useCodeExecState } from '../../state/codeExec';
import {
  TitleBar,
  MiniOrMaximizeOutputPanelBtn,
  ToolbarIconBtn,
  ToolbarIcons,
} from '../titleBar';
import { useLogs } from '../../state/logs';

export const OUTPUT_TITLE_BAR_HEIGHT = 32;

const SIZES = {
  big: 60,
};

export const OutputPanel = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const layout = useLayoutState((s) => s.layout);

  const ref = useRef<ImperativePanelHandle>(null);

  const sizePx = useResizablePanelPx('height', {
    groupId: WORKSPACE_PANEL_GROUP_ID,
    minPx: OUTPUT_TITLE_BAR_HEIGHT,
    maxPx: OUTPUT_TITLE_BAR_HEIGHT * 2, // when not possible to drag-minimize more
  });

  const title = useTitle();

  const [isAutoScroll, setAutoScroll] = useState(true);

  const clearLogs = useLogs((s) => s.clearLogs);

  const onToggleMiniMaximizeClick = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    if (el.isCollapsed()) {
      el.expand(SIZES.big);
    } else {
      el.collapse();
    }
  }, []);

  const execStatus = useCodeExecState((s) => s.status);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (execStatus === 'running' && isCollapsed) {
      el.expand(SIZES.big);
    }
  }, [execStatus, isCollapsed]);

  return (
    <MyPanel
      ref={ref}
      className={classNames(
        'bg-vscodebg/40 pb-2',
        layout === 'two-columns' ? 'rounded-l-sm' : 'rounded-t-sm'
      )}
      defaultSize={layout === 'single-column' ? 0.01 : undefined}
      collapsible={layout === 'single-column'}
      collapsedSize={sizePx.minSize}
      minSize={layout === 'single-column' ? sizePx.maxSize : 5}
      onCollapse={() => setIsCollapsed(true)}
      onExpand={() => setIsCollapsed(false)}
    >
      <TitleBar
        title={title}
        className="h-[32px]"
        rightSection={
          <ToolbarIcons>
            {layout === 'single-column' ? (
              <MiniOrMaximizeOutputPanelBtn
                isCollapsed={isCollapsed}
                onClick={onToggleMiniMaximizeClick}
              />
            ) : null}

            <ToolbarIconBtn
              label={isAutoScroll ? 'Turn off autoscroll' : 'Enable autoscroll'}
              icon={isAutoScroll ? 'ListPin' : 'ListScrollDown'}
              tooltipPlacement={
                layout === 'single-column' ? 'topRight' : 'bottomRight'
              }
              onClick={() => setAutoScroll((e) => !e)}
            />

            <ToolbarIconBtn
              label="Clear logs"
              icon="ListClear"
              tooltipPlacement={
                layout === 'single-column' ? 'topRight' : 'bottomRight'
              }
              onClick={clearLogs}
            />
          </ToolbarIcons>
        }
      />

      {!isCollapsed ? <OutputLogs isAutoScroll={isAutoScroll} /> : null}
    </MyPanel>
  );
};

const useTitle = () => {
  const execState = useCodeExecState();

  let text = 'Output';
  if (execState.lastFilename) {
    const stateText = execState.status === 'running' ? ' (running)' : '';
    text = `${text}: ${execState.lastFilename} ${stateText}`;
  }
  return text;
};
