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
