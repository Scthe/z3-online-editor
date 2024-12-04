declare global {
  const IS_PRODUCTION: boolean;
}

export const isProductionBuild = () => Boolean(IS_PRODUCTION);

export type WithClassName = { className?: string };
