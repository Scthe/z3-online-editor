type EmitterListener<T> = (params: T) => void;
export type EventEmitter<T> = ReturnType<typeof createEventEmitter<T>>;

/** https://github.com/Scthe/express-containers/blob/master/src/utils/eventEmitter.ts */
export const createEventEmitter = <T>(mode: 'immediate' | 'delayed') => {
  let listeners: EmitterListener<T>[] = [];

  const callAllListeners = (args: T) => {
    listeners.forEach((listener) => {
      try {
        listener(args);
      } catch (e) {
        // warning: stops error propagation
        console.error(e);
      }
    });
  };

  return {
    add: (l: EmitterListener<T>) => listeners.push(l),
    remove: (l: EmitterListener<T>) => {
      listeners = listeners.filter((e) => e !== l);
    },
    emit: (args: T) => {
      if (mode === 'delayed') {
        setTimeout(() => callAllListeners(args), 0);
      } else {
        callAllListeners(args);
      }
    },
  };
};
