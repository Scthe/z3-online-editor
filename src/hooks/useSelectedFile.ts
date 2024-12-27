import { useCallback, useEffect, useState } from 'react';
import { getFileContent, VirtualFS } from '../vfs-impl';
import { LOCAL_STORAGE_KEYS } from '../constants';
import { MAIN_FILE } from '../vfs-content';
import { listAllFiles } from '../vfs-impl/listAllFiles';

const isValidFilePath = (vfs: VirtualFS, path: string) =>
  getFileContent(vfs, path).status === 'ok';

// const LANGUAGE = 'javascript';
const LANGUAGE = 'typescript';

export interface SelectedFile {
  vfs: VirtualFS;
  filePath: string;
  language: typeof LANGUAGE;
  content: ReturnType<typeof getFileContent>;
  setSelectedFile: (f: string) => void;
}

export function useSelectedFile(vfs: VirtualFS): SelectedFile {
  const [selectedFile, setSelectedFile] = useState('');

  const changeSelectedFile = useCallback(
    (path: string) => {
      if (isValidFilePath(vfs, path)) {
        setSelectedFile(path);
        localStorage.setItem(LOCAL_STORAGE_KEYS.lastFile, path);
      }
    },
    [vfs]
  );

  useEffect(() => {
    const initialFile = getInitialFile(vfs);
    changeSelectedFile(initialFile);
  }, [changeSelectedFile, vfs]);

  return {
    vfs,
    filePath: selectedFile,
    language: LANGUAGE,
    content: getFileContent(vfs, selectedFile),
    setSelectedFile: changeSelectedFile,
  };
}

function getInitialFile(vfs: VirtualFS): string {
  try {
    // try from localStorage
    let lastFile_LS = localStorage.getItem(LOCAL_STORAGE_KEYS.lastFile);
    lastFile_LS =
      typeof lastFile_LS === 'string' && lastFile_LS.length > 0
        ? lastFile_LS
        : null;

    if (lastFile_LS && isValidFilePath(vfs, lastFile_LS)) {
      return lastFile_LS;
    }

    // try main.mjs
    if (isValidFilePath(vfs, MAIN_FILE)) {
      return MAIN_FILE;
    }

    // try anything
    const files = listAllFiles(vfs);
    for (const file of files) {
      if (isValidFilePath(vfs, file.absolutePath)) {
        return file.absolutePath;
      }
    }
  } catch (e) {
    //
  }

  return 'invalid-file.mjs';
}
