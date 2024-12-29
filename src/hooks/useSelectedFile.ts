import { useEffect, useState } from 'react';
import { HISTORY } from '../fileHistory';
import { useVirtualFs } from '../vfs-impl/hooks';

export function useSelectedFile(initialFile: string): string {
  const vfs = useVirtualFs();
  const [selectedFile, setSelectedFile] = useState(initialFile);

  useEffect(() => {
    const unlisten = HISTORY.listen((update) => {
      const { pathname } = update.location;
      if (vfs.exists(pathname)) {
        setSelectedFile(pathname);
      }
    });

    return unlisten;
  }, [vfs]);

  return selectedFile;
}
