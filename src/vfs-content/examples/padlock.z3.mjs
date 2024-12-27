/*
Guess code consisting of 3 digits. You know that:

- 291 has one number that is correct and on correct spot
- 245 has one number that is correct but on incorrect spot
- 463 has two numbers that are correct but on incorrect spots
- 578 all numbers are invalid and do not exist in the final code
- 569 has one number that is correct but on incorrect spot

*/

// code numbers
const [x0, x1, x2] = Int.consts('x0 x1 x2');
const solver = new ctx.Solver();

// digits
solver.add(x0.ge(0), x0.le(9), x1.ge(0), x1.le(9), x2.ge(0), x2.le(9));

// 291 has one number that is correct and on correct spot
solver.add(
  Or(
    And(x0.eq(2), x1.neq(9), x2.neq(1)),
    And(x0.neq(2), x1.eq(9), x2.neq(1)),
    And(x0.neq(2), x1.neq(9), x2.eq(1))
  )
);

// 245 has one number that is correct but on incorrect spot
solver.add(goodValueBadSpot([2, 4, 5], 1));

// 463 has two numbers that are correct but on incorrect spots
solver.add(goodValueBadSpot([4, 6, 3], 2));

// 578 all numbers are invalid and do not exist in the final code
solver.add(
  x0.neq(5),
  x0.neq(7),
  x0.neq(8),
  x1.neq(5),
  x1.neq(7),
  x1.neq(8),
  x2.neq(5),
  x2.neq(7),
  x2.neq(8)
);

// - 569 has one number that is correct but on incorrect spot
solver.add(goodValueBadSpot([5, 6, 9], 1));

// solve
console.log('Running the solver');
const status = await solver.check();

if (status === 'sat') {
  const model = solver.model();
  console.log(
    'Found solution:',
    Number(model.eval(x0).value()),
    Number(model.eval(x1).value()),
    Number(model.eval(x2).value())
  );
} else {
  console.log('Could not find the solution');
}

function goodValueBadSpot(nums, count) {
  // console.log(`goodValueBadSpot([${nums.join(",")}], count=${count})`)
  const code = [x0, x1, x2];
  const exps = [];

  for (let i = 0; i < 3; i++) {
    let strDebug = [];

    for (let j = 0; j < 3; j++) {
      if (i == j) {
        // negate, as it would mean correct number on correct place
        // strDebug.push(`code[${i}] != ${nums[i]}`);
        solver.add(code[j].neq(nums[i]));
      } else {
        // strDebug.push(`code[${j}] ?= ${nums[i]}`);
        exps.push(If(code[j].eq(nums[i]), 1, 0));
      }
    }
  }

  return Sum(...exps).eq(count);
}
