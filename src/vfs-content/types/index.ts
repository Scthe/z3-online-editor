import FULL_Z3_TYPINGS_ from './types.z3.d.ts';

// JSDoc has problems in Monaco?
// https://github.com/microsoft/monaco-editor/issues/3107

export const FULL_Z3_TYPINGS = FULL_Z3_TYPINGS_ as unknown as string;

export type Z3TypeDefinition = keyof typeof TYPES;

export const TYPES = (() => {
  const lines: string[] = FULL_Z3_TYPINGS.split('\n');
  const parseResult = parseTypingsIntoSubsections(lines);

  return {
    Arith: extractDefinition('export interface Arith<'),
    IntNum: extractDefinition('export interface IntNum<'),
    RatNum: extractDefinition('export interface RatNum<'),
    NonEmptySortArray: extractDefinition(
      'export declare type NonEmptySortArray<'
    ),
    SMTArray: extractDefinition('export interface SMTArray<'),
    BitVec: extractDefinition('export interface BitVec<'),
    Bool: extractDefinition('export interface Bool<'),
    Context: extractDefinition('export interface Context<'),
    Quantifier: extractDefinition('export interface Quantifier<'),
    Solver: extractDefinition('export interface Solver<'),
    Optimize: extractDefinition('export interface Optimize<'),
    Model: extractDefinition('export interface Model<'),
  };

  function extractDefinition(definitionDeclStr: string): string {
    const lineObjIdx = findDefinitionDeclIndex(definitionDeclStr);

    const lineObj = parseResult[lineObjIdx];
    const prevLineObj: TopLevelLine | undefined = parseResult[lineObjIdx - 1];
    const nextLineObj: TopLevelLine | undefined = parseResult[lineObjIdx + 1];

    const jsDoc =
      prevLineObj?.type === 'jsdoc'
        ? extractLines(prevLineObj.lineNum, lineObj.lineNum - 1)
        : '';
    const typeText = extractLines(lineObj.lineNum, nextLineObj?.lineNum);

    return `${jsDoc}\n${typeText}`;
  }

  function extractLines(
    startLineIdx: number,
    endLineIdx: number | undefined
  ): string {
    const endLineIdx2 = endLineIdx === undefined ? lines.length : endLineIdx;
    return lines.slice(startLineIdx, endLineIdx2 + 1).join('\n');
  }

  function findDefinitionDeclIndex(definitionDeclStr: string) {
    const matches = parseResult.filter((l) =>
      l.text.startsWith(definitionDeclStr)
    );
    if (matches.length === 0) {
      throw new Error(
        `Invalid typings section definition. No definition for '${definitionDeclStr}'`
      );
    }
    if (matches.length > 1) {
      throw new Error(
        `Invalid typings section definition. Multiple definitions for '${definitionDeclStr}'`
      );
    }

    return parseResult.findIndex((l) => l.text.startsWith(definitionDeclStr));
  }
})();

type TopLevelLine = {
  type: 'jsdoc' | 'export' | 'scope-end' | 'other';
  lineNum: number;
  text: string;
};

function parseTypingsIntoSubsections(lines: string[]) {
  const result: TopLevelLine[] = [];

  lines.forEach((lineText, idx) => {
    const topLvlLine: TopLevelLine = {
      type: 'export',
      lineNum: idx,
      text: lineText,
    };

    if (lineText.startsWith('/**')) {
      result.push({ ...topLvlLine, type: 'jsdoc' });
    } else if (lineText.startsWith('export')) {
      result.push({ ...topLvlLine, type: 'export' });
    } else if (lineText.startsWith('}') || lineText.startsWith(']')) {
      result.push({ ...topLvlLine, type: 'scope-end' });
    } else if (lineText.length > 0 && !lineText.startsWith(' ')) {
      result.push({ ...topLvlLine, type: 'other' });
    }
  });

  return result;
}
