import { listFilesInDir, joinPath } from '.';
import { FileNode, VirtualFS, FileDirent } from './types';

export type FileWithAbsolutePath = FileNode & { absolutePath: string };

export const isFileWithAbsolutePath = (
  o: unknown
): o is FileWithAbsolutePath => {
  if (!o || typeof o !== 'object') return false;

  return (
    'type' in o &&
    o.type === 'file' &&
    'content' in o &&
    typeof o.content === 'string' &&
    'absolutePath' in o &&
    typeof o.absolutePath === 'string'
  );
};

export const listAllFiles = (vfs: VirtualFS): Array<FileWithAbsolutePath> => {
  const result: Array<FileWithAbsolutePath> = [];

  const listFiles = (absolutePath: string, entry: FileDirent) => {
    if (entry.type === 'file') {
      result.push({ ...entry, absolutePath });
      return;
    }

    // process directory
    listFilesInDir(entry).forEach((fileName) => {
      const child = entry.files[fileName];
      const filePath = joinPath([absolutePath, fileName]);
      if (child) {
        listFiles(filePath, child);
      }
    });
  };

  listFiles('', { type: 'directory', files: vfs.files });

  return result;
};
