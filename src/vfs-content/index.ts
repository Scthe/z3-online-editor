import { createVirtualFileSystem, writeFile } from '../vfs-impl';
// files
import fileText_main from './default-file.z3.mts';

export const FILES = createVirtualFileSystem();
export const MAIN_FILE = `main.mts`;

const addFile = (filePath: string, content: string) => {
  filePath = `${filePath}.mts`; // '*.mts' only to allow for global async
  writeFile(FILES, filePath, content);
};

addFile('main', fileText_main);
addFile('docs/number', 'const a = 1;\nconsole.log(a)');
