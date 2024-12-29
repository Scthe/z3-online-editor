import React, { useCallback } from 'react';
import { OnCodeExec, RunCodeBtn } from '../runCodeBtn';
import {
  TitleBar,
  ToggleFilesSidebarBtn,
  ToggleLayoutBtn,
  ToolbarIcons,
} from '../titleBar';
import { GitHubBtn } from '../githubButton';
import { useIsDirty, useVirtualFsFile } from '../../vfs-impl/hooks';
import { useDiscardFileContext } from '../dialogs/discardFileDialog';

interface Props {
  filename: string;
  onCodeExec: OnCodeExec;
}

export function CodeEditorTitleBar(p: Props) {
  const title = useTitle(p.filename);

  return (
    <TitleBar
      title={title}
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

function useTitle(filename: string): string | JSX.Element {
  const file = useVirtualFsFile(filename);
  const isDirty = useIsDirty(filename);
  const { setDiscardedFilePath } = useDiscardFileContext();

  const openDiscardDialog = useCallback(() => {
    setDiscardedFilePath(filename);
  }, [filename, setDiscardedFilePath]);

  if (file.mode === 'readonly') {
    return `${filename} (read-only)`;
  }
  if (!isDirty || file.mode === 'user') {
    return filename;
  }

  return (
    <div className="inline">
      <h2 className="inline truncate">{filename}</h2>{' '}
      <button className="hover:underline" onClick={openDiscardDialog}>
        (changed)
      </button>
    </div>
  );
}
