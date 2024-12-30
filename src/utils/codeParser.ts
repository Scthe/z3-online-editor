import { startsWithWhiteSpace, typesafeObjectKeys } from './index.ts';

// JSDoc has problems in Monaco?
// https://github.com/microsoft/monaco-editor/issues/3107

const throwErr = (defName: string, msg: string) => {
  throw new Error(`Invalid parseCode() definition: '${defName}'. ${msg}`);
};

/** Parse code/typings text and extract blocks based on line starts */
export const parseCode = <K extends string>(
  codeText: string,
  lineStarts: Record<K, string>
): Record<K, string> => {
  const lines: string[] = codeText.split('\n');
  const parseResult = parseTypingsIntoSubsections(lines);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: Record<K, string> = {} as any;

  typesafeObjectKeys(lineStarts).forEach((name) => {
    const definitionDeclStr = lineStarts[name];
    const lineObjIdx = findDefinitionDeclIndex(
      parseResult,
      name,
      definitionDeclStr
    );

    const lineObj = parseResult[lineObjIdx];
    const prevLineObj: TopLevelLine | undefined = parseResult[lineObjIdx - 1];
    const nextLineObj: TopLevelLine | undefined = parseResult[lineObjIdx + 1];

    if (nextLineObj?.type !== 'scope-end') {
      throwErr(
        name,
        `Expected scope end, got '${nextLineObj.type}' ('${lines[nextLineObj.lineNum]}')`
      );
    }

    const jsDocText =
      prevLineObj?.type === 'jsdoc'
        ? extractLines(lines, prevLineObj.lineNum, lineObj.lineNum - 1) + '\n'
        : '';
    const typeText = extractLines(lines, lineObj.lineNum, nextLineObj?.lineNum);
    result[name] = `${jsDocText}${typeText}`;
  });

  return result;
};

function extractLines(
  lines: string[],
  startLineIdx: number,
  endLineIdx: number | undefined
): string {
  const endLineIdx2 = endLineIdx === undefined ? lines.length : endLineIdx;
  return lines.slice(startLineIdx, endLineIdx2 + 1).join('\n');
}

function findDefinitionDeclIndex(
  parseResult: TopLevelLine[],
  defName: string,
  definitionDeclStr: string
) {
  const matches = parseResult.filter((l) =>
    l.text.startsWith(definitionDeclStr)
  );
  if (matches.length === 0) {
    throwErr(defName, `No definition for '${definitionDeclStr}'`);
  }
  if (matches.length > 1) {
    throwErr(defName, `Multiple definitions for '${definitionDeclStr}'`);
  }

  return parseResult.findIndex((l) => l.text.startsWith(definitionDeclStr));
}

type TopLevelLine = {
  type: 'jsdoc' | 'scope-end' | 'other';
  lineNum: number;
  text: string;
};

function parseTypingsIntoSubsections(lines: string[]) {
  const result: TopLevelLine[] = [];

  lines.forEach((lineText, idx) => {
    const topLvlLine: TopLevelLine = {
      type: 'other',
      lineNum: idx,
      text: lineText,
    };

    if (lineText.startsWith('/**')) {
      result.push({ ...topLvlLine, type: 'jsdoc' });
    } else if (lineText.startsWith('}') || lineText.startsWith(']')) {
      result.push({ ...topLvlLine, type: 'scope-end' });
    } else if (lineText.length > 0 && !startsWithWhiteSpace(lineText)) {
      result.push({ ...topLvlLine, type: 'other' });
    }
  });

  return result;
}
