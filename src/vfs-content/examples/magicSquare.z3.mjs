/*

In mathematics, a square array of distinct integers is called a magic square if the sums of the numbers in each row, each column, and both main diagonals are the same.

*/

const SQUARE = [Int.consts('a b c'), Int.consts('d e f'), Int.consts('g h i')];
const ALL_CELLS = SQUARE.flat();
const sum = Int.const('sum');

const solver = new ctx.Solver();

// each cell contains a value 1<=x<=9
ALL_CELLS.forEach((cell) => {
  solver.add(cell.ge(1), cell.le(9));
});

// Each int is unique
solver.add(Distinct(...ALL_CELLS));

// each row sums up to $sum
SQUARE.forEach((row) => {
  solver.add(Sum(...row).eq(sum));
});

// each column sums up to $sum
solver.add(Sum(SQUARE[0][0], SQUARE[1][0], SQUARE[2][0]).eq(sum));
solver.add(Sum(SQUARE[0][1], SQUARE[1][1], SQUARE[2][1]).eq(sum));
solver.add(Sum(SQUARE[0][2], SQUARE[1][2], SQUARE[2][2]).eq(sum));

// each diagonal sums up to $sum
solver.add(Sum(SQUARE[0][0], SQUARE[1][1], SQUARE[2][2]).eq(sum));
solver.add(Sum(SQUARE[2][0], SQUARE[1][1], SQUARE[0][2]).eq(sum));

console.log('Running the solver..');
const status = await solver.check();

if (status === 'sat') {
  console.log('Found solution:');
  const model = solver.model();
  const getVal = (x) => Number(model.eval(x).value());

  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(getVal(SQUARE[i][j]));
    }
    console.log(JSON.stringify(row));
  }
  console.log(`sum = ${getVal(sum)}`);
} else {
  console.log('Could not find the solution');
}
