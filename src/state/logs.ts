import { takeLastItems } from '../utils';
import {
  CONSOLE_INTERCEPTOR,
  ConsoleInterceptorParams,
  ConsoleLevel,
} from '../utils/consoleIntercept';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export interface LoggedObject {
  name: string;
  value: object;
  className: string;
}

export interface LogLine {
  id: number;
  level: ConsoleLevel;
  argsOriginal: unknown[];
  parts: Array<string | LoggedObject>;
}

const MAX_ENTRIES = 200;
let NEXT_LOG_LINE_ID = 1;

export const useLogs = create(
  combine({ entries: [] as LogLine[] }, (set) => ({
    addLogEntry: (entry: ConsoleInterceptorParams) =>
      set((prevState) => {
        const newEntry = parseLogEntry(entry);
        const nextEntries = [...(prevState.entries || []), newEntry];
        return {
          entries: takeLastItems(nextEntries, MAX_ENTRIES),
        };
      }),

    clearLogs: () => set({ entries: [] }),
  }))
);

CONSOLE_INTERCEPTOR.add((params) => {
  useLogs.getState().addLogEntry(params);
});

function parseLogEntry({ level, args }: ConsoleInterceptorParams): LogLine {
  return {
    id: NEXT_LOG_LINE_ID++,
    level,
    argsOriginal: args,
    parts: parseLogArgs(args),
  };
}

function parseLogArgs(args: unknown[]): LogLine['parts'] {
  let nextExtraId = 0;
  const COLORS = ['sky', 'pink', 'lime', 'violet'].map((e) => `text-${e}-500`);

  return args.map((value: unknown) => {
    if (Array.isArray(value)) {
      const className = COLORS[nextExtraId % COLORS.length];
      const name = `$Array_${nextExtraId++}`;
      return { name, value, className };
    }
    if (typeof value === 'object' && value != null) {
      const className = COLORS[nextExtraId % COLORS.length];
      const name = `$Object_${nextExtraId++}`;
      return { name, value, className };
    }

    return '' + value;
  });

  // return { text: textParts.join(' '), extraObjects };
}
