// https://github.com/Z3Prover/z3/blob/master/src/api/js/src/high-level/high-level.test.ts#L219

const PUZZLE = `
....94.3.
...51...7
.89....4.
......2.8
.6.2.1.5.
1.2......
.7....52.
9...65...
.4.97....
`;
console.log('Solving sudou:');
PUZZLE.split('\n').forEach((e) => console.log(e));

const cells = [];
// 9x9 matrix of integer variables
for (let i = 0; i < 9; i++) {
  const row = [];
  for (let j = 0; j < 9; j++) {
    row.push(Int.const(`x_${i}_${j}`));
  }
  cells.push(row);
}

const solver = new ctx.Solver();

// each cell contains a value 1<=x<=9
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    solver.add(cells[i][j].ge(1), cells[i][j].le(9));
  }
}

// each row contains a digit only once
for (let i = 0; i < 9; i++) {
  solver.add(Distinct(...cells[i]));
}

// each column contains a digit only once
for (let j = 0; j < 9; j++) {
  const column = [];
  for (let i = 0; i < 9; i++) {
    column.push(cells[i][j]);
  }
  solver.add(Distinct(...column));
}

// each 3x3 contains a digit at most once
for (let iSquare = 0; iSquare < 3; iSquare++) {
  for (let jSquare = 0; jSquare < 3; jSquare++) {
    const square = [];

    for (let i = iSquare * 3; i < iSquare * 3 + 3; i++) {
      for (let j = jSquare * 3; j < jSquare * 3 + 3; j++) {
        square.push(cells[i][j]);
      }
    }

    solver.add(Distinct(...square));
  }
}

// set the known numbers
const PUZZLE_LINES = PUZZLE.trim().split('\n');
for (let i = 0; i < 9; i++) {
  const line = PUZZLE_LINES[i].trim();
  for (let j = 0; j < 9; j++) {
    const char = line[j];
    if (char !== '.') {
      solver.add(cells[i][j].eq(Number.parseInt(char)));
    }
  }
}

console.log('Running the solver..');
const status = await solver.check();

if (status === 'sat') {
  console.log('Found solution:');
  const model = solver.model();

  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      const cell = model.eval(cells[i][j]);
      const value = cell.value();
      row.push(Number(value));
    }
    console.log(JSON.stringify(row));
  }
} else {
  console.log('Could not find the solution');
}
