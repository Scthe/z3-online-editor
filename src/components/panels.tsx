import React, { ComponentProps, forwardRef } from 'react';
import classNames from 'classnames';
import {
  ImperativePanelHandle,
  Panel,
  PanelResizeHandle,
} from 'react-resizable-panels';
import { useLayoutState } from '../state/layout';

type MyPanelProps = ComponentProps<typeof Panel>;

// eslint-disable-next-line react/display-name
export const MyPanel = forwardRef<ImperativePanelHandle, MyPanelProps>(
  ({ className, children, ...props }, ref) => {
    const layout = useLayoutState((s) => s.layout);

    return (
      <Panel
        {...props}
        ref={ref}
        className={classNames(
          'flex flex-col',
          layout === 'two-columns' ? 'min-h-svh max-h-svh overflow-hidden' : '',
          className
        )}
      >
        {children}
      </Panel>
    );
  }
);

export const MyPanelResizeHandle = ({ vertical }: { vertical?: boolean }) => (
  <PanelResizeHandle
    className={classNames(
      'flex items-center justify-center',
      vertical ? 'px-[1px]' : 'py-[1px]'
    )}
  >
    <div
      className={classNames(
        'bg-sky-500',
        vertical ? 'w-1 h-[10%]' : 'h-1 w-[5%]'
      )}
    ></div>
  </PanelResizeHandle>
);
