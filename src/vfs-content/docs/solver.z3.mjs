/*
At the end of this file you will find following utils: _printModelValues().

When to use:
- Solver class - when you have many complicated/dynamically added constraints. Particularly when looking for multiple solutions.
- `solve()` function - when you have a few simple constraints. Much easier and shorter to use than `Solver`.
- `simplify()` - this function has a different purpose. It does not search for the solutions. It takes an expression and simplifies it instead. For example, in two-valued logic, `AND(p,  FALSE)` simplifies to FALSE.

*/

// Example: basic solver usage
// Solver.check() returns a promise that resolves
// to 'sat' or 'unsat', depending on if the constraints
// are satisfiable.
// We also have .push() and .pop() to temporarly
// add a new constraint.
const [x0, y0] = Int.consts('x0 y0');
const solver0 = new Solver();
solver0.add(x0.gt(10), y0.eq(x0.add(2))); // x0 > 10 && (y0 == x0 + 2)
console.log('[Basic usage] Solving constraints in the solver s ...');
console.log('[Basic usage] Result:', await solver0.check());
// start of the scope
console.log('[Basic usage] Create a new scope...');
solver0.push();
solver0.add(y0.lt(11)); // add 3rd constraint: y0 < 11
console.log('[Basic usage] Solving updated set of constraints...');
console.log('[Basic usage] Result:', await solver0.check());
console.log('[Basic usage] Restoring state...');
solver0.pop();
// end of the scope
console.log('[Basic usage] Solving restored set of constraints...');
console.log('[Basic usage] Result:', await solver0.check());

// Example: print many solutions
// x1 >= 5 && y1 <= 2 && (x1 + y1 == 6)
// expecting e.g. (x1 = 5, y1 = 1), (x1 = 6, y1 = 0), (x1 = 7, y1 = -1), etc.
const [x1, y1] = Int.consts('x1 y1');
const solver1 = new ctx.Solver();
solver1.add(x1.ge(5), y1.le(2), x1.add(y1).eq(6));
let printedSolutions = 0;
while (printedSolutions < 5) {
  const prefix = `[Many solutions ${printedSolutions}]`;
  // await solveExample(prefix, solver1);
  await solver1.check();
  const model = solver1.model();
  const x1_val = model.eval(x1).value(); // .value() is only available on IntVal, while we "technically" have Arith here
  const y1_val = model.eval(y1).value();
  console.log(prefix, `x1 = ${x1_val}, y1 = ${y1_val}`);

  // https://brandonrozek.com/blog/obtaining-multiple-solutions-z3/
  // add constraint: AND NOT(x1 == x1_val AND y1 == y1_val)
  // using De Morgan's Law: AND (x1 != x1_val OR y1 != y1_val)
  solver1.add(Or(x1.neq(x1_val), y1.neq(y1_val)));

  printedSolutions += 1;
}

// Example: Eval s-expr
// https://github.com/Z3Prover/z3/blob/983763213b0207201d9b6b9ede9eb3dd7c4f05ec/src/api/js/src/high-level/high-level.test.ts#L120
const solverSExpr = new Solver();
solverSExpr.fromString(
  // xSExpr < 2 && xSExpr > 0
  '(declare-const xSExpr Int) (assert (and (< xSExpr 2) (> xSExpr 0)))'
);
let sExprOk = true;
// execute first time
let resultSExpr = await solverSExpr.check();
if (resultSExpr !== 'sat') {
  console.error(`[Eval s-expr] Did not load correctly`);
  sExprOk = false;
}
// add additional constraint on same variable
const xSExpr = Int.const('xSExpr');
solverSExpr.add(xSExpr.neq(1)); // add constraint x != 1
resultSExpr = await solverSExpr.check();
if (resultSExpr === 'sat') {
  console.error(`[Eval s-expr] Did not add extra constraint correctly`);
  sExprOk = false;
}
if (sExprOk) {
  console.log(`[Eval s-expr] OK`);
}

// Example: using solve()
// Sometimes there is no need to create full Solver object
const [xSolve, ySolve] = Real.consts('xSolve ySolve');
await _printModelValues(
  '[solve()]',
  await solve(xSolve.pow(2).add(ySolve.pow(2)).eq(3), xSolve.pow(3).eq(2))
);

// Example: Simplification
const [p0, q0, r0] = Bool.consts('p q r');
// (p ^ q ^ TRUE) simplifies to (p ^ q)
const simplifyResult0 = await simplify(And(p0, q0, true));
console.log('[Simplify (p ^ q ^ TRUE)]', simplifyResult0.toString());
// (p ^ FALSE) can only evaluate to FALSE
const simplifyResult1 = await simplify(And(p0, false));
console.log('[Simplify (p ^ FALSE)]', simplifyResult1.toString());

// Example: Simplification, numbers
// Rewrite as simpler s-expr
// x + y + 2*x + 3
const xSimpl = Int.const('x');
const ySimpl = Int.const('y');
const simplifyResult = await simplify(
  xSimpl.add(ySimpl).add(xSimpl.mul(2)).add(3)
);
console.log('[Simplify, numbers]', simplifyResult.toString());

// Example: Substitution
const testSubstitution = (prefix, expr, expectedExpr) => {
  if (expr.eqIdentity(expectedExpr)) {
    console.log(`${prefix} OK`);
  } else {
    console.error(`${prefix} Failed`);
  }
};
const [xSubst, ySubst, zSubst] = Int.consts('xSubst ySubst zSubst');
const exprSubst = xSubst.add(ySubst); // x + y
// swap x for z to produce: z + y
const exprAfterSubst = substitute(exprSubst, [xSubst, zSubst]);
testSubstitution('[Substitution]', exprAfterSubst, zSubst.add(ySubst));

// Example: Substitution term
// (x + y) * (1 - (x + y))
const exprSubst2 = xSubst.add(ySubst).mul(Int.val(1).sub(xSubst.add(ySubst)));
// swap (x + y) for z to produce: z * (1 - z)
const exprAfterSubst2 = substitute(exprSubst2, [xSubst.add(ySubst), zSubst]);
testSubstitution(
  '[Substitution term]',
  exprAfterSubst2,
  zSubst.mul(Int.val(1).sub(zSubst))
);

// ----- UTILS:
/** Iterate over all model declarations and print the values */
function _printModelValues(prefix, model) {
  if (!model || typeof model !== 'object') {
    console.error(`${prefix} Could not print model values. Model:`, model);
    return;
  }
  for (const k of model.values()) {
    console.log(prefix, `${k.name()}:`, model.eval(k.call()).toString());
  }
}
