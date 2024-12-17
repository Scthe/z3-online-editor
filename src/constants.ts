export type CodeRunningState = 'running' | 'idle';

export type WithLayoutControls = {
  isTwoColumnLayout: boolean;
  setIsTwoColumnLayout: (b: boolean) => void;
};

export const MAIN_PANEL_GROUP_ID = 'main-grp-id';
