import { IContextZ3 } from './z3-api';
import { typesafeObjectKeys } from '../utils';

const SPECIAL_KEYS: Array<keyof IContextZ3> = [
  'solve',
  'simplify',
  'substitute',
];

// Dissallow cause conflicts with native JS
const KEYS_BLACKLIST: Array<keyof IContextZ3> = ['Array', 'Function'];

/**
 * Exists to not have to skip 'ctx.' everywhere (e.g. 'ctx.Add(...)' -> 'Add(...)').
 * We need to add to monaco globals and also to the eval function variables.
 */
export const getPluckedContextKeys = (ctx: IContextZ3) => {
  return typesafeObjectKeys(ctx).filter((name) => isPreservingKey(ctx, name));
};

const isUpperCase = (a: string) => a === a.toUpperCase();

function isPreservingKey(ctx: IContextZ3, name: keyof IContextZ3) {
  const firstLetter = name.at(0) || '';

  const isAllowed =
    isUpperCase(firstLetter) ||
    name.startsWith('is') ||
    SPECIAL_KEYS.includes(name);
  const isBlackListed = KEYS_BLACKLIST.includes(name);

  return isAllowed && !isBlackListed;
}
