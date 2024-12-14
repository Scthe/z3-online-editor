import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export type CodeExecState = {
  status: 'idle' | 'running';
  lastFilename?: string;
};

const DEFAULT_EXEC_STATE: CodeExecState = { status: 'idle' };

export const useCodeExecStateStore = create(
  combine(DEFAULT_EXEC_STATE as CodeExecState, (set) => ({
    setExecState: (nextState: CodeExecState) => set(() => nextState),
  }))
);
