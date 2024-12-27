import { useEffect, useState } from 'react';
import { getFileContent, VirtualFS } from '../vfs-impl';
import { HISTORY, INITAL_FILE } from '../fileHistory';

// const LANGUAGE = 'javascript';
const LANGUAGE = 'typescript';

export interface SelectedFile {
  vfs: VirtualFS; // TODO remove
  filePath: string;
  language: typeof LANGUAGE;
  content: ReturnType<typeof getFileContent>;
}

export function useSelectedFile(vfs: VirtualFS): SelectedFile {
  const [selectedFile, setSelectedFile] = useState(INITAL_FILE);

  useEffect(() => {
    const unlisten = HISTORY.listen((update) => {
      const { pathname } = update.location;
      setSelectedFile(pathname);
    });

    return unlisten;
  }, []);

  return {
    vfs,
    filePath: selectedFile,
    language: LANGUAGE,
    content: getFileContent(vfs, selectedFile),
  };
}
