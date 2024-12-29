import React, { useCallback, useEffect, useState } from 'react';
import TreeView, {
  INode,
  INodeRendererProps,
  ITreeViewOnNodeSelectProps,
} from 'react-accessible-treeview';
import { DiCss3, DiJavascript, DiNpm } from 'react-icons/di';
import { FaFile, FaList, FaRegFolder, FaRegFolderOpen } from 'react-icons/fa';
import './treeFileList.css';
import classNames from 'classnames';
import { useIsDirty, useVirtualFs } from '../../vfs-impl/hooks';
import { removePrefix } from '../../utils';
import {
  getNodeAbsPath,
  MyNodeMetadata,
  adaptVirtualFsForRender,
  getInitialExpandedIds,
} from './adaptVirtualFsForRender';

interface Props {
  selectedFile: string;
  onFileSelected?: (path: string) => void;
}

/**
 * - https://dgreene1.github.io/react-accessible-treeview/
 * - https://github.com/Scthe/express-containers/blob/master/src/app/components/treeFileList.tsx
 */
export function TreeFileList({ selectedFile, onFileSelected }: Props) {
  const [data, setData] = useState<INode<MyNodeMetadata>[]>([]);
  const vfs = useVirtualFs();

  // we only calcuate this once. There is no way to add new file!
  useEffect(() => {
    const data = adaptVirtualFsForRender(vfs);
    setData(data);
  }, [vfs]);

  const onSelected = useCallback(
    (e: ITreeViewOnNodeSelectProps) => {
      // ignore directories
      if (e.isBranch) return;

      const path = getNodeAbsPath(e.element);
      // eslint-disable-next-line no-console
      console.log(`Selected file: '${path}'`);

      onFileSelected?.(path);
    },
    [onFileSelected]
  );

  const isEmpty =
    data.length === 0 || data.every((e) => e.children.length === 0);

  if (isEmpty) {
    return <div className="px-4 text-center text-md opacity-60">(empty)</div>;
  }

  return (
    <div className="px-4 directory text-md">
      <TreeView
        data={data}
        aria-label="directory tree"
        defaultExpandedIds={getInitialExpandedIds(selectedFile)}
        onNodeSelect={onSelected}
        nodeRenderer={(e) => (
          <ListItem key={e.element.id} {...e} selectedFile={selectedFile} />
        )}
      />
    </div>
  );
}

const ListItem = ({
  element,
  level,
  getNodeProps,
  isBranch,
  isExpanded,
  selectedFile,
}: INodeRendererProps & {
  selectedFile: string;
}) => {
  const nodeProps = getNodeProps();
  const absPath = getNodeAbsPath(element);
  const isSelected = absPath === selectedFile;
  const isDirty = useIsDirty(absPath);

  return (
    <div
      {...nodeProps}
      style={{ paddingLeft: 20 * (level - 1) }}
      className={classNames(
        nodeProps.className,
        isSelected && 'tree-node--selected_my',
        isDirty && 'text-yellow-400'
      )}
    >
      <div className={classNames('pl-2 flex')}>
        <div className={classNames('inline-block relative top-[5px]')}>
          {isBranch ? (
            <FolderIcon isOpen={isExpanded} />
          ) : (
            <FileIcon filename={element.name} />
          )}
        </div>

        <span className="truncate">{removePrefix(element.name, '/')}</span>
      </div>
    </div>
  );
};

const FolderIcon = (props: { isOpen: boolean }) =>
  props.isOpen ? (
    <FaRegFolderOpen color="e8a87c" className="icon" aria-hidden />
  ) : (
    <FaRegFolder color="e8a87c" className="icon" aria-hidden />
  );

const FileIcon = ({ filename }: { filename: string }) => {
  if (filename.toLowerCase() === 'package.json') {
    return <DiNpm color="red" className="icon" aria-hidden />;
  }

  const extension = filename.slice(filename.lastIndexOf('.') + 1);
  switch (extension) {
    case 'js':
    case 'mjs':
      return <DiJavascript color="yellow" className="icon" aria-hidden />;
    case 'css':
      return <DiCss3 color="turquoise" className="icon" aria-hidden />;
    case 'json':
      return <FaList color="yellow" className="icon" aria-hidden />;
    case 'npmignore':
      return <DiNpm color="red" className="icon" aria-hidden />;
    case 'html':
      return <FaFile color="red" className="icon" aria-hidden />;
    case 'txt':
    case 'md':
      return <FaFile color="grey" className="icon" aria-hidden />;
    default:
      return null;
  }
};
