export type CodeRunningState = 'running' | 'idle';

export type WithLayoutControls = {
  isTwoColumnLayout: boolean;
  setIsTwoColumnLayout: (b: boolean) => void;
};
