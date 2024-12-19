import { LOCAL_STORAGE_KEYS } from '../constants';
import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';

export type ColumnLayout = 'single-column' | 'two-columns';

export type LayoutState = {
  layout: 'single-column' | 'two-columns';
  showFilesPanel: boolean;
};

const opposite = (cl: ColumnLayout): ColumnLayout =>
  cl === 'single-column' ? 'two-columns' : 'single-column';

const DEFAULT_STATE: LayoutState = {
  layout: 'single-column',
  showFilesPanel: true,
};

const storeDefinition = combine(DEFAULT_STATE as LayoutState, (set) => ({
  toggleColumnLayout: () =>
    set((s) => ({
      ...s,
      layout: opposite(s.layout),
    })),
  toggleShowFilesPanel: () =>
    set((s) => ({
      ...s,
      showFilesPanel: !s.showFilesPanel,
    })),
}));

export const useLayoutState = create(
  persist(storeDefinition, {
    name: LOCAL_STORAGE_KEYS.layout,
  })
);
