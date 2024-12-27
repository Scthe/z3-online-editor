import { createVirtualFileSystem, writeFile } from '../vfs-impl';
// files
import fileText_main from './default-file.z3.mjs';
// docs
import docs_numeric from './docs/numeric.z3.mjs';
import docs_booleans from './docs/booleans.z3.mjs';
import docs_solver from './docs/solver.z3.mjs';
import docs_bitVec from './docs/bitVec.z3.mjs';
import docs_arrays from './docs/arrays.z3.mjs';
import docs_quantifiers from './docs/quantifiers.z3.mjs';
// examples
import examples_sudoku from './examples/sudoku.z3.mjs';
import examples_padlock from './examples/padlock.z3.mjs';
import examples_eightQueens from './examples/eightQueens.z3.mjs';
import examples_einsteinPuzzle from './examples/einsteinPuzzle.z3.mjs';
import examples_physics from './examples/physics.z3.mjs';

import { FULL_Z3_TYPINGS, TYPES, Z3TypeDefinition } from './types';

// TODO [NOW] replace repo links to include hash
// TODO [NOW] handle utils
// TODO [MEDIUM] sets:
//   - https://github.com/Z3Prover/z3/pull/7471/files
//   - https://github.com/Z3Prover/z3/blob/master/src/api/js/src/high-level/high-level.test.ts#L522

/*
TODO Context e.g. PbEq, Distinct
*/

export const FILES = createVirtualFileSystem();
export const MAIN_FILE = `main.mjs`;

export const isReadOnly = (p: string) => {
  return p.startsWith('types/');
};

addFile('main', fileText_main);
addFile('docs/numeric', docs_numeric);
addFile('docs/booleans', docs_booleans);
addFile('docs/solver', docs_solver);
addFile('docs/bitVec', docs_bitVec);
addFile('docs/arrays', docs_arrays);
addFile('docs/quantifiers', docs_quantifiers);
addFile('examples/sudoku', examples_sudoku);
addFile('examples/padlock', examples_padlock);
addFile('examples/eightQueens', examples_eightQueens);
addFile('examples/einsteinPuzzle', examples_einsteinPuzzle);
addFile('examples/physics', examples_physics);
addFile('types/_allTypes', FULL_Z3_TYPINGS);
typesFile('types/Arith', ['Arith', 'IntNum', 'RatNum']);
typesFile('types/Array', ['NonEmptySortArray', 'SMTArray']);
typesFile('types/BitVec', ['BitVec']);
typesFile('types/Bool', ['Bool']);
typesFile('types/Context', ['Context']);
typesFile('types/Quantifier', ['Quantifier']);
typesFile('types/Solver', ['Model', 'Solver', 'Optimize']);

function addFile(filePath: string, content: string) {
  filePath = `${filePath}.mjs`; // '*.mjs' only to allow for global async
  writeFile(FILES, filePath, content);
}

function typesFile(filePath: string, defs: Z3TypeDefinition[]) {
  const contents = defs.map((def) => TYPES[def]);
  const content = contents.join('\n\n');
  return addFile(filePath, content);
}
