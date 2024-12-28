import { createHashHistory } from 'history';
import { LOCAL_STORAGE_KEYS } from './constants';
import { VirtualFs } from './vfs-impl';
import { MAIN_FILE } from './vfs-content';

export const HISTORY = createHashHistory({});

HISTORY.listen((update) => {
  const { pathname } = update.location;
  // console.log('History update', { pathname });
  localStorage.setItem(LOCAL_STORAGE_KEYS.lastFile, pathname);
});

export function getInitialFile(vfs: VirtualFs) {
  const isValidFilePath = (path: string) => vfs.exists(path);

  try {
    // try pathname
    const { pathname } = HISTORY.location;
    if (isValidFilePath(pathname)) {
      return pathname;
    }

    // try from localStorage
    const pathnameLocalStorage = getLastFileByLocalStorage();
    if (pathnameLocalStorage && isValidFilePath(pathnameLocalStorage)) {
      return pathnameLocalStorage;
    }

    // try main.mjs
    if (isValidFilePath(MAIN_FILE)) {
      return MAIN_FILE;
    }

    // try anything
    const files = vfs.listFiles();
    for (const file of files) {
      if (isValidFilePath(file.path)) {
        return file.path;
      }
    }
  } catch (e) {
    //
  }

  return 'invalid-file.mjs';
}

function getLastFileByLocalStorage() {
  const lastFile_LS = localStorage.getItem(LOCAL_STORAGE_KEYS.lastFile);
  return typeof lastFile_LS === 'string' && lastFile_LS.length > 0
    ? lastFile_LS
    : undefined;
}
