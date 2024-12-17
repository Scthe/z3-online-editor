import classNames from 'classnames';
import { OutputLogs } from './outputLogs';
import { OUTPUT_TITLE_BAR_HEIGHT, OutputTitleBar } from './outputTitleBar';
import { MyPanel } from '../panels';
import { useResizablePanelPx } from '../../hooks/useResizablePanelPx';
import React, { useRef } from 'react';
import { ImperativePanelHandle } from 'react-resizable-panels';
import { useLayoutState } from '../../state/layout';
import { MAIN_PANEL_GROUP_ID } from '../../constants';

export const OutputPanel = () => {
  const layout = useLayoutState((s) => s.layout);

  const ref = useRef<ImperativePanelHandle>(null);

  const sizePx = useResizablePanelPx('height', {
    groupId: MAIN_PANEL_GROUP_ID,
    minPx: OUTPUT_TITLE_BAR_HEIGHT,
    maxPx: OUTPUT_TITLE_BAR_HEIGHT * 2, // when not possible to drag-minimize more
  });

  return (
    <MyPanel
      ref={ref}
      className={classNames(
        'bg-vscodebg/40',
        layout === 'two-columns' ? 'rounded-l-sm' : 'rounded-t-sm'
      )}
      defaultSize={layout === 'single-column' ? 0 : undefined}
      collapsible={layout === 'single-column'}
      collapsedSize={sizePx.minSize}
      minSize={layout === 'single-column' ? sizePx.maxSize : 5}
    >
      <OutputTitleBar />
      <OutputLogs />
    </MyPanel>
  );
};
