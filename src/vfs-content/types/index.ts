// @ts-expect-error import as text, not as code
import FULL_Z3_TYPINGS_ from './types.z3.d.ts';
import { parseCode } from '../../utils/codeParser.ts';

export const FULL_Z3_TYPINGS = FULL_Z3_TYPINGS_ as unknown as string;

export type Z3TypeDefinition = keyof typeof TYPINGS_LINE_STARTS;

const TYPINGS_LINE_STARTS = {
  Arith: 'export interface Arith<',
  IntNum: 'export interface IntNum<',
  RatNum: 'export interface RatNum<',
  NonEmptySortArray: 'export declare type NonEmptySortArray<',
  SMTArray: 'export interface SMTArray<',
  BitVec: 'export interface BitVec<',
  Bool: 'export interface Bool<',
  Context: 'export interface Context<',
  Quantifier: 'export interface Quantifier<',
  Solver: 'export interface Solver<',
  Optimize: 'export interface Optimize<',
  Model: 'export interface Model<',
} as const;

export const TYPES = parseCode(FULL_Z3_TYPINGS, TYPINGS_LINE_STARTS);
