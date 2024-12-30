import { DEFAULT_LANGUAGE, Language } from '../constants';
import { FileMode, VirtualFs } from '../vfs-impl';
import * as FILES from './files';

import { FULL_Z3_TYPINGS, TYPES, Z3TypeDefinition } from './types';
import { UTILS_CODE_TEXT } from './utils';

/*
TODO [HIGH] Make it read nicer. Add actual text, not just code
TODO [MEDIUM] Add Sets:
  - https://github.com/Z3Prover/z3/pull/7471/files
  - https://github.com/Z3Prover/z3/blob/master/src/api/js/src/high-level/high-level.test.ts#L522
TODO [LOW] have centralised place where all utils are stored
*/

export const MAIN_FILE = `main.mjs`;

interface FileOpts {
  mode?: FileMode;
  language?: Language;
  // utils?: UtilFn[];
}

export function loadFiles(vfs: VirtualFs) {
  addFile('main', FILES.main + '\n\n' + FILES.examples_sudoku, {
    mode: 'user',
  });
  addFile('readme', FILES.readme, { mode: 'readonly', language: 'markdown' });
  addFile('utils', UTILS_CODE_TEXT, { mode: 'readonly' });
  addFile('docs/numeric', FILES.docs_numeric);
  addFile('docs/booleans', FILES.docs_booleans);
  addFile('docs/solver', FILES.docs_solver);
  addFile('docs/bitVec', FILES.docs_bitVec);
  addFile('docs/arrays', FILES.docs_arrays);
  addFile('docs/quantifiers', FILES.docs_quantifiers);
  addFile('docs/context', FILES.docs_context);
  addFile('examples/sudoku', FILES.examples_sudoku);
  addFile('examples/padlock', FILES.examples_padlock);
  addFile('examples/eightQueens', FILES.examples_eightQueens);
  addFile('examples/einsteinPuzzle', FILES.examples_einsteinPuzzle);
  addFile('examples/physics', FILES.examples_physics);
  addFile('examples/magicSquare', FILES.examples_magicSquare);
  addFile('examples/dogCatMouse', FILES.examples_dogCatMouse);
  addFile('examples/janeStreetJune2018', FILES.examples_janeStreetJune2018);
  addFile('types/_allTypes', FULL_Z3_TYPINGS, { mode: 'readonly' });
  addTypesFile('types/Arith', ['Arith', 'IntNum', 'RatNum']);
  addTypesFile('types/Array', ['NonEmptySortArray', 'SMTArray']);
  addTypesFile('types/BitVec', ['BitVec']);
  addTypesFile('types/Bool', ['Bool']);
  addTypesFile('types/Context', ['Context']);
  addTypesFile('types/Quantifier', ['Quantifier']);
  addTypesFile('types/Solver', ['Model', 'Solver', 'Optimize']);

  function addFile(filePath: string, content: string, opts?: FileOpts) {
    const mode = opts?.mode || 'system';
    const language = opts?.language || DEFAULT_LANGUAGE;

    // '*.mjs' to allow for global async
    const fileExt = language === 'markdown' ? 'md' : 'mjs';
    filePath = `${filePath}.${fileExt}`;

    // const utils = opts?.utils || [];
    // content = insertUtils(content, utils);
    vfs.createFile(filePath, content, { mode, language });
  }

  function addTypesFile(filePath: string, defs: Z3TypeDefinition[]) {
    const contents = defs.map((def) => TYPES[def]);
    const content = contents.join('\n\n');
    return addFile(filePath, content, { mode: 'readonly' });
  }
}
