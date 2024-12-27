import { safeJsonStringify, takeLastItems } from '../utils';
import {
  CONSOLE_INTERCEPTOR,
  ConsoleInterceptorParams,
  ConsoleLevel,
} from '../utils/consoleIntercept';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export interface LoggedObject {
  name: string;
  value: object | string;
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

useLogs.getState().addLogEntry({
  level: 'meta',
  args: [
    'Everything printed in this window is also accessible in browser dev-tools',
  ],
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

  return args.map((value: unknown): string | LoggedObject => {
    if (Array.isArray(value)) {
      const className = COLORS[nextExtraId % COLORS.length];
      const name = `$Array_${nextExtraId++}`;
      return { name, className, value: cleanObjectForLogging(value) };
    }
    if (typeof value === 'object' && value != null) {
      if (value instanceof Error) {
        const className = 'text-red-500';
        const name = `$Error_${nextExtraId++}`;
        return { name, className, value: value.message };
      }
      const className = COLORS[nextExtraId % COLORS.length];
      const name = `$Object_${nextExtraId++}`;
      return { name, className, value: cleanObjectForLogging(value) };
    }
    if (typeof value === 'function') {
      const className = COLORS[nextExtraId % COLORS.length];
      const name = `$Function_${nextExtraId++}`;
      return { name, className, value: String(value) };
    }

    return '' + value;
  });

  // return { text: textParts.join(' '), extraObjects };
}

const cleanObjectForLogging = (o: unknown) => {
  return JSON.parse(safeJsonStringify(o));
};
