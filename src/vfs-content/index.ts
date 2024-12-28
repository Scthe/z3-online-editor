import { createVirtualFileSystem, writeFile } from '../vfs-impl';
import * as FILES from './files';

import { FULL_Z3_TYPINGS, TYPES, Z3TypeDefinition } from './types';
import { removePrefix } from '../utils';

// TODO [NOW] replace z3 repo links to include hash
// TODO [NOW] handle utils
// TODO [NOW] add intro to main file
// TODO [NOW] Add docs / article-like

// TODO [MEDIUM] sets:
//   - https://github.com/Z3Prover/z3/pull/7471/files
//   - https://github.com/Z3Prover/z3/blob/master/src/api/js/src/high-level/high-level.test.ts#L522

export const VIRTUAL_FILE_SYSTEM = createVirtualFileSystem();
export const MAIN_FILE = `main.mjs`;

export const isReadOnly = (p: string) => {
  p = removePrefix(p, '/');
  return p.startsWith('types/');
};

addFile('main', FILES.main);
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
addFile('types/_allTypes', FULL_Z3_TYPINGS);
addTypesFile('types/Arith', ['Arith', 'IntNum', 'RatNum']);
addTypesFile('types/Array', ['NonEmptySortArray', 'SMTArray']);
addTypesFile('types/BitVec', ['BitVec']);
addTypesFile('types/Bool', ['Bool']);
addTypesFile('types/Context', ['Context']);
addTypesFile('types/Quantifier', ['Quantifier']);
addTypesFile('types/Solver', ['Model', 'Solver', 'Optimize']);

function addFile(filePath: string, content: string) {
  filePath = `${filePath}.mjs`; // '*.mjs' only to allow for global async
  writeFile(VIRTUAL_FILE_SYSTEM, filePath, content);
}

function addTypesFile(filePath: string, defs: Z3TypeDefinition[]) {
  const contents = defs.map((def) => TYPES[def]);
  const content = contents.join('\n\n');
  return addFile(filePath, content);
}
