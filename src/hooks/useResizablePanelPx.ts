import { useState, useEffect } from 'react';
import useLatest from 'use-latest';

const SELECTORS = {
  handleId: '[data-panel-resize-handle-id]',
};

interface Opts {
  groupId: string;
  minPx: number;
  maxPx: number;
}

/**
 * - https://github.com/bvaughn/react-resizable-panels/issues/46#issuecomment-1368108416
 */
export function useResizablePanelPx(dim: 'width' | 'height', opts: Opts) {
  const [minSize, setMinSize] = useState(opts.minPx);
  const [maxSize, setMaxSize] = useState(opts.maxPx);

  const optsRef: React.MutableRefObject<Opts> = useLatest(opts);

  useEffect(() => {
    const panelGroup = document.getElementById(opts.groupId)!;
    // does not handle nesting!
    const resizeHandles: NodeListOf<HTMLDivElement> =
      panelGroup.querySelectorAll(SELECTORS.handleId)!;

    const getSize = (el: HTMLElement) =>
      dim === 'width' ? el.offsetWidth : el.offsetHeight;

    const observer = new ResizeObserver(() => {
      let distibutableSpace = getSize(panelGroup);
      resizeHandles.forEach((resizeHandle) => {
        distibutableSpace -= getSize(resizeHandle);
      });

      // Minimum/Maximum size in pixels is a percentage of the PanelGroup's width,
      // less the (fixed) width of the resize handles.
      const { minPx, maxPx } = optsRef.current;
      setMinSize((minPx / distibutableSpace) * 100);
      setMaxSize((maxPx / distibutableSpace) * 100);
    });
    observer.observe(panelGroup);
    resizeHandles.forEach((resizeHandle) => {
      observer.observe(resizeHandle);
    });

    return () => {
      observer.disconnect();
    };
  }, [dim, opts.groupId, optsRef]);

  return { minSize, maxSize };
}
