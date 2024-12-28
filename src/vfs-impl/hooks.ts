import { createContext, useContext } from 'react';
import { FileNode, VirtualFs } from '.';

export interface ContextType {
  originalFileSystem: VirtualFs;
  userFileSystem: VirtualFs;
}

export const VirtualFsContext = createContext<ContextType>(undefined!);

export const useVirtualFs = () => {
  return useContext(VirtualFsContext).userFileSystem;
};

const INVALID_FILE_ERROR =
  'ERROR!\n\nError reading file from the virtual filesystem. This should not happen';

export const useVirtualFsFile = (path: string): FileNode => {
  const vfs = useVirtualFs();
  const file = vfs.readFile(path);

  if (file.status === 'ok') {
    return file;
  }

  return {
    content: INVALID_FILE_ERROR,
    language: 'typescript',
    mode: 'readonly',
  };
};

// useIsDirty(filename){
///
// }
