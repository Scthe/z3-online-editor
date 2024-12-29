import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FileNode, VirtualFs } from '.';
import debounce from 'debounce';
import { s2ms } from '../utils';

interface ContextType {
  originalFileSystem: VirtualFs;
  userFileSystem: VirtualFs;
}

export const VirtualFsContext = createContext<ContextType>(undefined!);

export const useVirtualFs = () => {
  return useContext(VirtualFsContext).userFileSystem;
};

export const useOriginalVirtualFs = () => {
  return useContext(VirtualFsContext).originalFileSystem;
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

const isFileDirty = (
  originalFileSystem: VirtualFs,
  userFileSystem: VirtualFs,
  path: string
): boolean => {
  const userFile = userFileSystem.readFile(path);
  const orgFile = originalFileSystem.readFile(path);
  if (userFile.status !== 'ok' || orgFile.status !== 'ok') return false;

  // do not show dirty for user (dirty by design) and readonly (never dirty) files.
  return userFile.mode === 'system' && userFile.content !== orgFile.content;
};

export function useIsDirty(filename: string) {
  const [isDirty, setDirty] = useState(false);
  const { originalFileSystem, userFileSystem } = useContext(VirtualFsContext);

  const recalcDirtyFlag = useCallback(() => {
    setDirty(isFileDirty(originalFileSystem, userFileSystem, filename));
  }, [filename, originalFileSystem, userFileSystem]);

  useEffect(() => {
    recalcDirtyFlag();

    return userFileSystem.addSingleFileListener(
      filename,
      debounce(recalcDirtyFlag, s2ms(1))
    );
  }, [filename, recalcDirtyFlag, userFileSystem]);

  return isDirty;
}
