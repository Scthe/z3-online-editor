import React from 'react';
import classNames from 'classnames';
import { OnCodeExec, OnOutputShowToggle, TitleBar } from './outputTitleBar';
import { CodeRunningState, OutputShowState } from '../constants';
import { WithClassName } from '../utils';

interface Props extends WithClassName {
  fileName: string;
  shownState: OutputShowState;
  codeExecState: CodeRunningState;
  onCodeExec: OnCodeExec;
  onOutputShowToggle: OnOutputShowToggle;
}

// TODO add drop shadow?
export function OutputPanel(props: Props) {
  const { shownState, className } = props;

  return (
    <div
      className={classNames(
        'fixed bottom-0 bg-black/90 overflow-hidden z-20',
        shownState === 'minimized' && 'rounded-t-md',
        shownState === 'shown' && 'h-[500px] max-h-[60svh] rounded-t-md',
        shownState === 'fullscreen' && 'h-svh',
        className
      )}
    >
      <TitleBar {...props} />

      <div className="overflow-y-scroll"></div>
    </div>
  );
}
