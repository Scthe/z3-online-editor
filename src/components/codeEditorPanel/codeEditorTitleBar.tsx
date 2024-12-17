import React from 'react';
import { OnCodeExec, RunCodeBtn } from '../runCodeBtn';
import { TitleBar } from '../panels';

interface Props {
  filename: string;
  onCodeExec: OnCodeExec;
}

export function CodeEditorTitleBar(p: Props) {
  return (
    <TitleBar>
      <div className=""></div>

      <h2 className="truncate">{p.filename}</h2>

      <div className="">
        <RunCodeBtn onCodeExec={p.onCodeExec} />
      </div>
    </TitleBar>
  );
}
