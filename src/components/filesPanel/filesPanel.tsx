import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ImperativePanelHandle, Panel } from 'react-resizable-panels';
import { TreeFileList } from './treeFileList';
import { TitleBar } from '../titleBar';
import { useLayoutState } from '../../state/layout';
import { SelectedFile } from '../../hooks/useSelectedFile';

interface Props {
  activeFile: SelectedFile;
}

/** https://github.com/Scthe/express-containers/blob/master/src/app/app.tsx */
export const FilesPanel = ({ activeFile }: Props) => {
  const ref = useRef<ImperativePanelHandle>(null);
  const isFirstRenderRef = useRef(true);

  const showFilesPanel = useLayoutState((s) => s.showFilesPanel);
  const sizeSmall = 0.001;

  useEffect(() => {
    const sidebarEl = ref.current;
    const firstRender = isFirstRenderRef.current;

    // hack for React's strict mode. Too lazy to dealt with proper way
    setTimeout(() => {
      isFirstRenderRef.current = false;
    }, 500);

    if (!sidebarEl || firstRender) return;

    if (sidebarEl.isCollapsed()) {
      sidebarEl.expand();
    } else {
      sidebarEl.collapse();
    }
  }, [showFilesPanel]);

  return (
    <Panel
      ref={ref}
      defaultSize={showFilesPanel ? 15 : sizeSmall}
      collapsible
      collapsedSize={sizeSmall}
      minSize={showFilesPanel ? 5 : sizeSmall}
      maxSize={20}
      className={classNames(
        'bg-vscodebg rounded-r-sm min-h-full flex flex-col'
      )}
    >
      <TitleBar isH1 title="z3 Online Editor" className="text-center" />

      <div className="h-0 pb-6 overflow-y-auto grow">
        <TreeFileList
          vfs={activeFile.vfs}
          onFileSelected={activeFile.changeSelectedFile}
          selectedFile={activeFile.filePath}
        />
      </div>
    </Panel>
  );
};
