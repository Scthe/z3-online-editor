import defaultFile from './default-file.z3.mjs';

export type VfsFile = ReturnType<typeof createFile>;

const createFile = (fileName: string, content: string) => ({
  name: `${fileName}.mts`, // '*.mts' only to allow for global async
  language: 'typescript',
  value: content,
});

export const FILES = [
  //
  createFile('main', defaultFile),
];
