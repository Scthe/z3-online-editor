import { useEffect, useState } from 'react';
import { HISTORY } from '../fileHistory';

export function useSelectedFile(initialFile: string): string {
  const [selectedFile, setSelectedFile] = useState(initialFile);

  useEffect(() => {
    const unlisten = HISTORY.listen((update) => {
      const { pathname } = update.location;
      setSelectedFile(pathname);
    });

    return unlisten;
  }, []);

  return selectedFile;
}
