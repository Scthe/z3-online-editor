import { createHashHistory } from 'history';
import { LOCAL_STORAGE_KEYS } from './constants';
import { isValidFilePath } from './vfs-impl';
import { FILES, MAIN_FILE } from './vfs-content';
import { listAllFiles } from './vfs-impl/listAllFiles';

export const HISTORY = createHashHistory({});

export const INITAL_FILE = getInitialFile();
// eslint-disable-next-line no-console
console.log(`Inital file '${INITAL_FILE}'`);

HISTORY.listen((update) => {
  const { pathname } = update.location;
  // console.log('History update', { pathname });
  localStorage.setItem(LOCAL_STORAGE_KEYS.lastFile, pathname);
});

export function getInitialFile() {
  const vfs = FILES;

  try {
    // try pathname
    const { pathname } = HISTORY.location;
    if (isValidFilePath(vfs, pathname)) {
      return pathname;
    }

    // try from localStorage
    const pathnameLocalStorage = getLastFileByLocalStorage();
    if (pathnameLocalStorage && isValidFilePath(vfs, pathnameLocalStorage)) {
      return pathnameLocalStorage;
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

function getLastFileByLocalStorage() {
  const lastFile_LS = localStorage.getItem(LOCAL_STORAGE_KEYS.lastFile);
  return typeof lastFile_LS === 'string' && lastFile_LS.length > 0
    ? lastFile_LS
    : undefined;
}
