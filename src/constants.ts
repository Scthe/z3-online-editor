export type CodeRunningState = 'running' | 'idle';

export type WithLayoutControls = {
  isTwoColumnLayout: boolean;
  setIsTwoColumnLayout: (b: boolean) => void;
};

export const WORKSPACE_PANEL_GROUP_ID = 'main-grp-id';

const storagePrefix = 'z3-editor';

export const LOCAL_STORAGE_KEYS = {
  fileSystem: `${storagePrefix}-fileSystem`,
  layout: `${storagePrefix}-layout`,
  lastFile: `${storagePrefix}-lastFile`,
};

// TODO [NOW] somehow make JS mode work
export type Language = 'typescript' | 'markdown';
export const DEFAULT_LANGUAGE: Language = 'typescript';
