/*
Chess problem:
Place eight chess queens on an 8x8 chessboard so that no two queens attack each other.
*/

// In chess, each queen's position has row and column.
// So each column has 1 queen. Each Int contains a row number
// for this particular column.
const QUEENS = Int.consts('q0 q1 q2 q3 q4 q5 q6 q7');

const solver = new ctx.Solver();

// valid position
QUEENS.forEach((v) => {
  solver.add(v.ge(0), v.le(7));
});

// each row is different
solver.add(Distinct(...QUEENS));

// they cannot share diagonal
for (let col = 0; col < 8; col++) {
  for (let col2 = col + 1; col2 < 8; col2++) {
    if (col2 == col) continue;

    solver.add(
      QUEENS[col].sub(QUEENS[col2]).neq(col2 - col),
      QUEENS[col].sub(QUEENS[col2]).neq(col - col2)
    );
  }
}

// solve
console.log('Running the solver..');
const status = await solver.check();

if (status === 'sat') {
  const model = solver.model();
  QUEENS.forEach((v) => {
    const pos = Number(model.eval(v).value()); // range: [0..7]
    const str = '.'.repeat(8);
    console.log(setChar(str, pos, 'Q').split('').join(' '));
  });
} else {
  console.log('Could not find the solution');
}

function setChar(str, index, char) {
  var a = str.split('');
  a[index] = char;
  return a.join('');
}
