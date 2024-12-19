/* eslint-disable no-console */
import { typesafeObjectKeys } from '.';
import { createEventEmitter } from './eventEmitter';

export type ConsoleLevel = keyof typeof orgConsole | 'meta';
export type ConsoleInterceptorParams = { level: ConsoleLevel; args: unknown[] };

export const CONSOLE_INTERCEPTOR = {
  ...createEventEmitter<ConsoleInterceptorParams>('delayed'),
  enabled: false,
};

const orgConsole = {
  log: console.log,
  info: console.info,
  warn: console.warn,
  error: console.error,
};

console.log('Installing console intercept..');
typesafeObjectKeys(orgConsole).forEach((level) => {
  console[level] = (...args) => {
    orgConsole[level](...args);

    if (CONSOLE_INTERCEPTOR.enabled) {
      CONSOLE_INTERCEPTOR.emit({ level, args });
    }
  };
});
