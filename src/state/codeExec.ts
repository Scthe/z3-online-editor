import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export type CodeExecState = {
  status: 'idle' | 'running';
  lastFilename?: string;
};

const DEFAULT_STATE: CodeExecState = { status: 'idle' };

export const useCodeExecState = create(
  combine(DEFAULT_STATE as CodeExecState, (set) => ({
    setExecState: (nextState: CodeExecState) => set(() => nextState),
  }))
);
