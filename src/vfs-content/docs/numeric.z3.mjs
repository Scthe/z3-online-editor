// utility function to print solutions
async function solveExample(prefix, solver) {
  const result = await solver.check();
  if (result !== 'sat') {
    console.log(prefix, 'is unsatisfiable');
    return;
  }

  const model = solver.model();
  printModelValues(prefix, model);
  return model;
}

function printModelValues(prefix, model) {
  if (!model || typeof model !== 'object') {
    console.error(`${prefix} Could not print model values. Model:`, model);
    return;
  }
  for (const k of model.values()) {
    console.log(prefix, `${k.name()}:`, model.eval(k.call()).toString());
  }
}

// utility function to assert that set of constraints evaluatest to True
async function assertEvaluatesTrue(prefix, expr) {
  const result = await solve(expr);
  if (result === 'unsat' || result === 'unknown') {
    console.error(`${prefix} returned '${result}'`);
  } else {
    console.log(`${prefix} OK`);
  }
}

function assertIsOK(val, msg) {
  if (!val) {
    console.error(`Assertion error: '${msg}'`);
  }
}

// Docs: https://microsoft.github.io/z3guide/docs/theories/Arithmetic

// Example: Integers
// find *some* x0, y0 that satisfy:
// x0 >= 5 && y0 <= 2 && (x0 + y0 == 6)
const x0 = ctx.Int.const('x0');
const y0 = Int.const('y0'); // we can skip "ctx."
const solver0 = new ctx.Solver();
solver0.add(x0.ge(5)); // x0 >= 5
// there is an implicit And() between 2 different calls to 'solver0.add(...)'
solver0.add(And(y0.le(2), x0.add(y0).eq(6))); // y0 <= 2 && (x0 + y0 == 6)
await solveExample('[Integers]', solver0);

// Example: Quadratic Equation with Real (decimal points)
// find *one* of roots of:
// x^2 - 7x + 10 == 0
// see "docs/solver.mjs" for example how to find more
const xQE = Real.const('xQE'); // has decimal points
const solverQE = new ctx.Solver();
solverQE.add(xQE.pow(2).sub(xQE.mul(7)).add(9).eq(0));
await solveExample('[Quadratic Equation]', solverQE);

// Example: Mix Int, Real types
const [aR, bR] = Real.consts('aR bR');
const [sI, tI] = Int.consts('sI rI');
console.log('[Mix Int, Real]', (await simplify(aR.add(sI).add(1))).toString());
console.log('[Mix Int, Real]', (await simplify(ToReal(tI).add(bR))).toString());

// Example: System of equations
// Solve system of equations:
// x^2 + y^2 == 3
// x^3 == 2
const xSoE = Real.const('xSoE');
const ySoE = Real.const('ySoE');
await printModelValues(
  '[System of equations]',
  await solve(xSoE.pow(2).add(ySoE.pow(2)).eq(3), xSoE.pow(3).eq(2))
);

// Example: Real Arithmetic
// Check for precision errors
const n1 = Real.val('1/2');
const n2 = Real.val('0.5');
const n3 = Real.val(0.5);
await assertEvaluatesTrue(
  '[Real Arithmetic, halfs equality]',
  And(n1.eq(n2), n1.eq(n3))
);
// test preserve limited precision
const n4 = Real.val('-1/3');
const n5 = Real.val('-0.3333333333333333333333333333333333');
await assertEvaluatesTrue(
  '[Real Arithmetic, -1/3 precision]',
  n4.neq(n5) // should be treated as different
);

// Example: Non-linear arithmetic
// https://microsoft.github.io/z3guide/docs/theories/Arithmetic#non-linear-arithmetic
// https://github.com/Z3Prover/z3/blob/master/src/api/js/src/high-level/high-level.test.ts#L354
const xNLA = Real.const('xNLA');
const yNLA = Real.const('yNLA');
const zNLA = Real.const('zNLA');

const solver = new Solver();
solver.add(xNLA.mul(xNLA).add(yNLA.mul(yNLA)).eq(1)); // x^2 + y^2 == 1
solver.add(xNLA.mul(xNLA).mul(xNLA).add(zNLA.mul(zNLA).mul(zNLA)).lt('1/2')); // x^3 + z^3 < 1/2
const modelNLA = await solveExample('[Non-linear arithmetic]', solver);
assertIsOK(isRealVal(modelNLA.get(xNLA)), 'xNLA');
// solution of y is a polynomial
// https://stackoverflow.com/a/69740906
assertIsOK(isReal(modelNLA.get(yNLA)), 'yNLA');
assertIsOK(isRealVal(modelNLA.get(zNLA)), 'zNLA');

// Example: Sum
// Find 3 numbers greater than 0 that sum up to 9. Two numbers are even.
const xSum = Int.consts('xSum ySum zSum');
await printModelValues(
  '[Sum]',
  await solve(
    ...xSum.map((e) => e.gt(0)), // numbers greater than 0
    Sum(...xSum).eq(9), // that sum up to 9.
    // Swap each number for 1 if it is even or 0 if odd.
    // Then sum these numbers as they have to match 2
    Sum(...xSum.map((e) => If(e.mod(2).eq(0), 1, 0))).eq(2)
  )
);

// TODO https://microsoft.github.io/z3guide/docs/theories/Arithmetic#non-linear-arithmetic
