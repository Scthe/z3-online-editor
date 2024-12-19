import { useCallback, useEffect, useState } from 'react';
import { getFileContent, VirtualFS } from '../vfs-impl';

const isFileOk = (vfs: VirtualFS, path: string) =>
  getFileContent(vfs, path).status === 'ok';

export interface SelectedFile {
  vfs: VirtualFS;
  filePath: string;
  language: 'typescript';
  content: ReturnType<typeof getFileContent>;
  changeSelectedFile: (f: string) => void;
}

export function useSelectedFile(
  vfs: VirtualFS,
  initialFile: string
): SelectedFile {
  const [selectedFile, setSelectedFile] = useState(initialFile);

  const changeSelectedFile = useCallback(
    (path: string) => {
      if (isFileOk(vfs, path)) {
        setSelectedFile(path);
      }
    },
    [vfs]
  );

  // verify initial file
  useEffect(() => {
    if (isFileOk(vfs, initialFile)) return;
    const files = Object.keys(vfs.files).sort();

    for (const name of files) {
      if (isFileOk(vfs, name)) {
        setSelectedFile(name);
        break;
      }
    }
  }, [initialFile, vfs]);

  return {
    vfs,
    filePath: selectedFile,
    language: 'typescript',
    content: getFileContent(vfs, selectedFile),
    changeSelectedFile,
  };
}
