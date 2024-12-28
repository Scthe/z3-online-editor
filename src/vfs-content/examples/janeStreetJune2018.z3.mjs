/*
https://www.janestreet.com/puzzles/twenty-four-seven-index/


The grid is incomplete. Place numbers in some of the empty cells above so that in total the grid contains one 1, two 2’s, etc., up to seven 7’s. Furthermore, each row and column must contain exactly 4 numbers which sum to 20. Finally, the numbered cells must form a connected region, but every 2-by-2 subsquare in the completed grid must contain at least one empty cell.

The answer to this puzzle is the product of the areas of the connected groups of orthogonally adjacent empty squares in the completed grid.
*/

const _ = 0;
const GRID = [
  [_, 4, _, _, _, _, _],
  [_, _, 6, 3, _, _, 6],
  [_, _, _, _, _, 5, 5],
  [_, _, _, 4, _, _, _],
  [4, 7, _, _, _, _, _],
  [2, _, _, 7, 4, _, _],
  [_, _, _, _, _, 1, _],
];

const solver = new ctx.Solver();

const MODEL = GRID.map((row, rowIdx) => {
  return row.map((cellValue, colIdx) => {
    const v = Int.const(`cell_${rowIdx}_${colIdx}`);
    if (cellValue === _) {
      solver.add(v.ge(0), v.le(7)); // 0 means unfilled
    } else {
      solver.add(v.eq(cellValue));
    }
    return v;
  });
});
const MODEL_ALL_CELLS = MODEL.flat();
const SIZE = 7;

// the grid contains one 1, two 2’s, etc., up to seven 7’s
for (let n = 1; n < 8; n++) {
  solver.add(Sum(...MODEL_ALL_CELLS.map((e) => If(e.eq(n), 1, 0))).eq(n));
}

// each row must contain exactly 4 numbers which sum to 20
MODEL.forEach((row) => {
  solver.add(Sum(...row).eq(20));
  solver.add(Sum(...row.map((e) => If(e.gt(0), 1, 0))).eq(4));
});

// each column must contain exactly 4 numbers which sum to 20
MODEL.forEach((_, colIdx) => {
  const col = MODEL.map((row) => row[colIdx]);
  solver.add(Sum(...col).eq(20));
  solver.add(Sum(...col.map((e) => If(e.gt(0), 1, 0))).eq(4));
});

// Every 2-by-2 subsquare in the completed grid must contain at least one empty cell.
for (let i = 0; i < SIZE - 1; i++) {
  for (let j = 0; j < SIZE - 1; j++) {
    solver.add(
      Or(
        MODEL[i][j].eq(0),
        MODEL[i][j + 1].eq(0),
        MODEL[i + 1][j].eq(0),
        MODEL[i + 1][j + 1].eq(0)
      )
    );
  }
}

// The numbered cells must form a connected region
// NOTE: following code is not sufficient.
// E.g. not connected islands satisfy it but are not a valid solution
const getNeighbours = (i, j) => {
  const neighbours = [];
  if (i > 0) neighbours.push([i - 1, j]); // left
  if (i < 6) neighbours.push([i + 1, j]); // right
  if (j > 0) neighbours.push([i, j - 1]); // top
  if (j < 6) neighbours.push([i, j + 1]); // bottom
  return neighbours;
};

for (let i = 0; i < SIZE - 1; i++) {
  for (let j = 0; j < SIZE - 1; j++) {
    const neighbours = getNeighbours(i, j);

    solver.add(
      Implies(
        MODEL[i][j].neq(0),
        Or(...neighbours.map(([x, y]) => MODEL[x][y].gt(0)))
      )
    );
  }
}

// Process solution candidate using exhaustive check
function checkConnectivityExhaustive(grid) {
  const alreadyProcessed = new Set();
  const toProcess = [];

  const firstCell = [0, grid[0].findIndex((v) => v > 0)];
  toProcess.push(firstCell);

  while (toProcess.length > 0) {
    const [i, j] = toProcess.shift();
    const hash = i + '_' + j;
    if (alreadyProcessed.has(hash)) continue;
    alreadyProcessed.add(hash);

    const neighbours = getNeighbours(i, j);
    neighbours.forEach(([ii, jj]) => {
      const val = grid[ii][jj];
      if (val === 0) return; // empty
      toProcess.push([ii, jj]);
    });
  }

  return alreadyProcessed.size === 7 + 6 + 5 + 4 + 3 + 2 + 1;
}

// SOLVE

console.log('Running the solver..');
let status = await solver.check();
let solutionFound = false;

while (status === 'sat') {
  const model = solver.model();
  const getVal = (x) => Number(model.eval(x).value());

  const finalGrid = [];
  for (let i = 0; i < SIZE; i++) {
    let row = [];
    for (let j = 0; j < SIZE; j++) {
      const v = getVal(MODEL[i][j]);
      row.push(v);
    }
    finalGrid.push(row);
  }

  if (!checkConnectivityExhaustive(finalGrid)) {
    // not a proper solution
    // https://brandonrozek.com/blog/obtaining-multiple-solutions-z3/
    // add constraint: AND NOT(x1 == x1_val AND y1 == y1_val)
    // using De Morgan's Law: AND (x1 != x1_val OR y1 != y1_val)
    const finalGrid_cells = finalGrid.flat();
    solver.add(
      Or(
        // x1.neq(x1_val), y1.neq(y1_val)
        ...MODEL_ALL_CELLS.map((v, i) => v.neq(finalGrid_cells[i]))
      )
    );

    // run solver again to generate next solution
    status = await solver.check();
  } else {
    // DONE!
    console.log('Found solution:');
    printSolution(finalGrid);
    solutionFound = true;
    break;
  }
}

if (!solutionFound) {
  console.log('Could not find the solution');
}

function printSolution(grid) {
  const getStats = (row) => {
    const sum = row.reduce((acc, x) => acc + x, 0);
    const cnt = row.reduce((acc, x) => acc + (x > 0 ? 1 : 0), 0);
    return `sum=${sum}, cnt=${cnt}`;
  };

  grid.forEach((row) =>
    console.log(
      row.map((v) => (v > 0 ? v : '-')).join(' '),
      ` | ${getStats(row)}`
    )
  );

  // check columns
  for (let i = 0; i < SIZE; i++) {
    const col = grid.map((row) => row[i]);
    console.log(`col[${i}]: ${getStats(col)}`);
  }

  // check occurences
  const finalGrid_cells = grid.flat();
  let occurences = [0, 0, 0, 0, 0, 0, 0, 0];
  occurences = occurences.map((_, n) =>
    finalGrid_cells.reduce((acc, v) => acc + (v === n ? 1 : 0), 0)
  );
  console.log(`Occurences:`, JSON.stringify(occurences.slice(1)));
}
