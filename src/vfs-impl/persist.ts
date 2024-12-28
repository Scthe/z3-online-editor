import { LOCAL_STORAGE_KEYS } from '../constants';
import { VirtualFs } from '.';
import debounce from 'debounce';
import { s2ms } from '../utils';

const getStorageKey = (filepath: string) =>
  `${LOCAL_STORAGE_KEYS.fileSystem}${VirtualFs.normalizePath(filepath)}`;

export function __persistVirtualFsFile(path: string, content: string) {
  const storageKey = getStorageKey(path);
  localStorage.setItem(storageKey, content);
}
export const persistVirtualFsFile = debounce(__persistVirtualFsFile, s2ms(2));

export function restoreLocalVirtualFsChanges(vfs: VirtualFs) {
  vfs.listFiles().forEach(({ path }) => {
    const storageKey = getStorageKey(path);
    const rawData = localStorage.getItem(storageKey);
    // this also forbids empty file. Why would you want one?
    if (!rawData || typeof rawData !== 'string') return;

    vfs.updateFile(path, rawData);
  });
}
