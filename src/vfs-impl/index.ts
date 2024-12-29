import { ensurePrefix } from '../utils';
import { createEventEmitter } from '../utils/eventEmitter';

/** https://nodejs.org/api/errors.html#common-system-errors */
export type FileError = 'e-no-entry' | 'e-read-only';

export type FileReadResult<T> =
  | ({ status: 'ok' } & T)
  | { status: 'error'; error: FileError };

type FileListener = (path: string) => void;
type Unlisten = () => void;

export type FileMode =
  | 'readonly' // cannot be changed
  | 'system' // can be changed, but also restored
  | 'user'; // can be changed, but no particular need to restore it

export const ok = <T>(e: T) => ({ status: 'ok' as const, ...e });
export const err = (error: FileError) => ({ status: 'error' as const, error });

// const LANGUAGE = 'javascript';
const LANGUAGE = 'typescript';

export type FileNode = {
  mode: FileMode;
  content: string;
  language: typeof LANGUAGE;
};

export class VirtualFs {
  private listeners = createEventEmitter<string>('immediate');
  private files: Record<string, FileNode | undefined> = {};

  createFile = (path: string, content: string, mode: FileMode = 'system') => {
    path = VirtualFs.normalizePath(path);
    this.files[path] = { mode, content, language: 'typescript' };
    this.listeners.emit(path);
  };

  updateFile = (path: string, content: string): FileError | 'ok' => {
    const node = this.getNode(path);
    if (!node) return 'e-no-entry';
    if (node.mode === 'readonly') return 'e-read-only';

    node.content = content;
    this.listeners.emit(path);
    return 'ok';
  };

  readFile = (path: string): FileReadResult<FileNode> => {
    const node = this.getNode(path);
    if (node === undefined) return err('e-no-entry');
    return ok(node);
  };

  private getNode = (path: string) => {
    path = VirtualFs.normalizePath(path);
    return this.files[path];
  };

  exists = (path: string) => this.readFile(path).status === 'ok';

  listFiles = () => {
    return Object.entries(this.files).map(([path, content]) => ({
      path,
      ...content!,
    }));
  };

  addListener = (l: FileListener): Unlisten => {
    this.listeners.add(l);
    return () => this.listeners.remove(l);
  };

  addSingleFileListener = (path: string, listener: FileListener): Unlisten => {
    return this.addListener((changedFilepath) => {
      if (changedFilepath === path) listener(changedFilepath);
    });
  };

  public static normalizePath = (path: string) => ensurePrefix(path, '/');
}
