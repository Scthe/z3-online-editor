import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export type ColumnLayout = 'single-column' | 'two-columns';

export type LayoutState = {
  layout: 'single-column' | 'two-columns';
};

const opposite = (cl: ColumnLayout): ColumnLayout =>
  cl === 'single-column' ? 'two-columns' : 'single-column';

const DEFAULT_STATE: LayoutState = { layout: 'single-column' };

export const useLayoutState = create(
  combine(DEFAULT_STATE as LayoutState, (set) => ({
    toggleColumnLayout: () =>
      set((s) => ({
        ...s,
        layout: opposite(s.layout),
      })),
  }))
);
