import React from 'react';
import { OnCodeExec, RunCodeBtn } from '../runCodeBtn';
import {
  TitleBar,
  ToggleFilesSidebarBtn,
  ToggleLayoutBtn,
  ToolbarIcons,
} from '../titleBar';
import { GitHubBtn } from '../githubButton';

interface Props {
  filename: string;
  onCodeExec: OnCodeExec;
}

export function CodeEditorTitleBar(p: Props) {
  return (
    <TitleBar
      title={p.filename}
      className="h-[32px]"
      leftSection={
        <ToolbarIcons>
          <ToggleFilesSidebarBtn />
          <ToggleLayoutBtn />
        </ToolbarIcons>
      }
      rightSection={
        <ToolbarIcons>
          <GitHubBtn size={20} />
          <RunCodeBtn onCodeExec={p.onCodeExec} />
        </ToolbarIcons>
      }
    />
  );
}
