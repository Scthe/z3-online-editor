import React from 'react';
import { OnCodeExec, RunCodeBtn } from '../runCodeBtn';
import {
  TitleBar,
  ToggleFilesSidebarBtn,
  ToggleLayoutBtn,
  ToolbarIcons,
} from '../titleBar';
import { GitHubBtn } from '../githubButton';
import { useVirtualFsFile } from '../../vfs-impl/hooks';

interface Props {
  filename: string;
  onCodeExec: OnCodeExec;
}

export function CodeEditorTitleBar(p: Props) {
  const file = useVirtualFsFile(p.filename);
  const readOnlyText = file.mode === 'readonly' ? ' (read-only)' : '';

  return (
    <TitleBar
      title={`${p.filename}${readOnlyText}`}
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
