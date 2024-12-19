import debounce from 'debounce';
import { VirtualFS } from './types';
import { writeFile } from '.';
import { s2ms } from '../utils';
import { LOCAL_STORAGE_KEYS } from '../constants';
import { isFileWithAbsolutePath, listAllFiles } from './listAllFiles';

const __persistVirtualFs = (
  vfs: VirtualFS,
  filePath: string,
  content: string
) => {
  writeFile(vfs, filePath, content);

  const data = listAllFiles(vfs);

  localStorage.setItem(LOCAL_STORAGE_KEYS.fileSystem, JSON.stringify(data));
};

export const persistVirtualFs = debounce(__persistVirtualFs, s2ms(2));

export const restoreVirtualFs = (vfs: VirtualFS) => {
  const rawData = localStorage.getItem(LOCAL_STORAGE_KEYS.fileSystem);
  if (!rawData) return;

  const data = JSON.parse(rawData);
  if (!Array.isArray(data)) return;

  data.forEach((file) => {
    if (!isFileWithAbsolutePath(file)) {
      console.error('Invalid file from localStorage', file);
      return;
    }

    writeFile(vfs, file.absolutePath, file.content);
  });
};
