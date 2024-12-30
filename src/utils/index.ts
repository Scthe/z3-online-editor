declare global {
  const IS_PRODUCTION: boolean;
}

export const isProductionBuild = () => Boolean(IS_PRODUCTION);

export type WithClassName = { className?: string };

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

/** Same as `Object.keys()`, but preserves key type if record used */
export function typesafeObjectKeys<T extends string | number | symbol>(
  obj: Record<T, unknown>
): T[] {
  const result = Object.keys(obj);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return result as any;
}

export const takeLastItems = <T>(arr: T[], cnt: number) => {
  return arr.slice(Math.max(0, arr.length - cnt));
};

/** https://github.com/Scthe/express-containers/blob/master/src/utils/index.ts#L53 */
export const ensurePrefix = (str: string, prefix: string) =>
  str.startsWith(prefix) ? str : prefix + str;

export const removePrefix = (str: string, prefix: string) =>
  str.startsWith(prefix) ? str.slice(prefix.length) : str;

const STARTS_WITH_WHITESPACE_REGEX = /^\s/;

export const startsWithWhiteSpace = (s: string) =>
  STARTS_WITH_WHITESPACE_REGEX.test(s);

/** Seconds to miliseconds */
export const s2ms = (s: number) => s * 1000;

export function safeJsonStringify(data: unknown, space?: number): string {
  const seen: unknown[] = [];

  return JSON.stringify(
    data,
    function (_key, val) {
      if (val != null && typeof val == 'object') {
        if (seen.indexOf(val) >= 0) {
          return '<cyclic>';
        }
        seen.push(val);
      }
      return val;
    },
    space
  );
}
