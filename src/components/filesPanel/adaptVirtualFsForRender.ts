import { INode, flattenTree } from 'react-accessible-treeview';
import './treeFileList.css';
import { VirtualFs } from '../../vfs-impl';
import { removePrefix } from '../../utils';
import { IFlatMetadata } from 'react-accessible-treeview/dist/TreeView/utils';

export type MyNodeMetadata = { absPath: string };
export type MyTreeNode = Parameters<typeof flattenTree<MyNodeMetadata>>[0];

export const getNodeAbsPath = (element: INode<IFlatMetadata>): string => {
  const element2 = element as INode<MyNodeMetadata>;
  return element2.metadata?.absPath || '';
};

export const getInitialExpandedIds = (path: string): string[] => {
  path = removePrefix(path, '/');
  const subdirs = path.split('/');
  const result: string[] = [];

  let absPath = '';
  subdirs.forEach((subdir) => {
    absPath += `/${subdir}`;
    result.push(absPath);
  });

  return result;
};

export function adaptVirtualFsForRender(vfs: VirtualFs) {
  const tree: MyTreeNode = {
    id: 'root',
    name: '',
    metadata: { absPath: '' },
    children: [],
    isBranch: true,
  };

  vfs.listFiles().forEach(({ path }) => {
    path = removePrefix(path, '/');
    const subdirs = path.split('/');
    const filename = subdirs.pop()!;

    // add subdirs
    let dir = tree;
    let absPath = '';
    subdirs.forEach((subdir) => {
      absPath += `/${subdir}`;
      let node = dir.children?.find((f) => f.name === subdir);
      if (node == undefined) {
        node = {
          id: absPath,
          name: subdir,
          metadata: { absPath },
          children: [],
          isBranch: true,
        };
        dir.children = dir.children || [];
        dir.children.push(node);
      }

      dir = node;
    });

    // add file
    absPath += `/${filename}`;
    dir.children = dir.children || [];
    dir.children.push({
      name: filename,
      metadata: { absPath },
      isBranch: false,
    });
  });

  sortTreeChildren(tree);

  return flattenTree(tree);
}

function sortTreeChildren(node: MyTreeNode) {
  const comparator = (a: MyTreeNode, b: MyTreeNode) => {
    if (a.isBranch === b.isBranch) {
      return a.name.localeCompare(b.name);
    }
    return a.isBranch ? -1 : 1;
  };

  if (node.children) {
    node.children.sort(comparator);
    node.children.forEach(sortTreeChildren);
  }
}
