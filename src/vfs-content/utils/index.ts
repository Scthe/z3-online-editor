// @ts-expect-error import as text, not as code
import UTILS_CODE_TEXT_ from './utils.z3.mjs';
// import { parseCode } from '../../utils/codeParser.ts';

export const UTILS_CODE_TEXT = UTILS_CODE_TEXT_ as unknown as string;

export type UtilFn = keyof typeof UTILS_LINE_STARTS;

const UTILS_LINE_STARTS = {
  evalExpr: 'async function _evalExpr(',
  parseBitVec2Number: 'function _parseBitVec2Number(',
  evalBitVec: 'async function _evalBitVec(',
  evalBool: 'async function _evalBool(',
} as const;

// export const UTILS = parseCode(UTILS_CODE_TEXT, UTILS_LINE_STARTS);
