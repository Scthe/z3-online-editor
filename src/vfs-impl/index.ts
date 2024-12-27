export * from './types';

import {
  Path,
  VirtualFS,
  DirNode,
  FileNode,
  FileDirent,
  FileReadResult,
  FileError,
} from './types';

// https://github.com/Scthe/express-containers/blob/master/src/virtual-fs/index.ts

const PATH_SEPARATOR = '/';

export const ok = <T>(e: T) => ({ status: 'ok' as const, ...e });
export const err = (error: FileError) => ({ status: 'error' as const, error });

const splitPath = (path: Path): string[] =>
  Array.isArray(path) ? path : path.split(PATH_SEPARATOR);

export const joinPath = (path: Path): string => {
  if (!Array.isArray(path)) return path;
  return path.filter((e) => e.length > 0).join(PATH_SEPARATOR);
};

const parsePath = (path: Path): [string[], string] => {
  const dirParts = splitPath(path);
  const parts: string[] = [];

  for (const part of dirParts) {
    if (part === '.') {
      continue;
    } else if (part === '..') {
      parts.pop();
    } else {
      parts.push(part);
    }
  }

  const fileName = parts.pop()!;
  // console.log({ path, dir, fileName });
  return [parts, fileName];
};

const mkdirp = (vfs: VirtualFS, path: Path): DirNode => {
  const pathParts = splitPath(path);
  let curDir = { type: 'directory', files: vfs.files } satisfies DirNode;

  for (const subdir of pathParts) {
    const childDir = curDir.files[subdir] || { type: 'directory', files: {} };
    if (childDir.type === 'file') {
      throw new Error(`Expected '${subdir}' to be directory, was file`);
    }

    curDir.files[subdir] = childDir;
    curDir = childDir;
  }

  return curDir;
};

export const writeFile = (
  vfs: VirtualFS,
  path: Path,
  content: FileNode['content']
) => {
  const [dirs, fileName] = parsePath(path);
  const dirNode = mkdirp(vfs, dirs);

  // console.log('write', { path, dirs, fileName, dirNode });
  dirNode.files[fileName] = { type: 'file', content };
};

export const getDirent = (
  vfs: VirtualFS,
  path: Path
): FileReadResult<{ dirent: FileDirent }> => {
  const [dirs, fileName] = parsePath(path);
  let curDir: DirNode = { type: 'directory', files: vfs.files };

  for (const subdir of dirs) {
    if (subdir === '.' || subdir.length === 0) continue;
    const childDir = curDir.files[subdir];
    if (!childDir || childDir.type !== 'directory') return err('e-no-entry');
    curDir = childDir;
  }

  const res = curDir.files[fileName];
  return res ? ok({ dirent: res }) : err('e-no-entry');
};

export const getFileContent = (
  vfs: VirtualFS,
  path: Path
): FileReadResult<{ content: string }> => {
  const textFile = getDirent(vfs, path);
  if (textFile.status === 'error') return err(textFile.error);
  if (textFile.dirent.type === 'directory') return err('e-not-a-file');

  return ok({ content: textFile.dirent.content });
};

export const isValidFilePath = (vfs: VirtualFS, path: string) =>
  getFileContent(vfs, path).status === 'ok';

export const createVirtualFileSystem = (): VirtualFS => ({
  files: {},
});

export const listFilesInDir = (dir: DirNode) => Object.keys(dir.files);

export const vfsDebugTree = (vfs: VirtualFS) => {
  // eslint-disable-next-line no-console
  const log = (...args: unknown[]) => console.log(...args);

  log(`Virtual file system`); // (basePath '${vfs.basePath}')

  const printDirent = (fileName: string, entry: FileDirent, depth: number) => {
    const ws = ' '.repeat(depth * 2) + '| ';
    if (depth == 3) return;

    if (entry.type === 'file') {
      log(ws + fileName);
      return;
    }

    // process directory
    if (fileName.length) {
      log(ws + fileName + '/');
    }
    listFilesInDir(entry).forEach((fileName) => {
      const child = entry.files[fileName];
      if (child) {
        printDirent(fileName, child, depth + 1);
      }
    });
  };

  printDirent('', { type: 'directory', files: vfs.files }, 0);
};
