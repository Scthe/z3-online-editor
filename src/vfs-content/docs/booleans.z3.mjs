/*
Z3 supports Boolean operators:
- And,
- Or,
- Not,
- Implies (implication),
- If (if-then-else).

Bi-implications are represented using equality .eq().
I use "^" and "v" for AND, OR operators.
*/

// TODO duplicate
// utility function to assert that set of constraints evaluatest to True
async function assertEvaluatesTrue(prefix, ...expr) {
  const result = await solve(...expr);
  if (result === 'unsat' || result === 'unknown') {
    console.error(`${prefix} returned '${result}'`);
  } else {
    console.log(`${prefix} OK`);
  }
}

// TODO duplicate
function printModelValues(prefix, model) {
  if (!model || typeof model !== 'object') {
    console.error(`${prefix} Could not print model values. Model:`, model);
    return;
  }
  for (const k of model.values()) {
    console.log(prefix, `${k.name()}:`, model.eval(k.call()).toString());
  }
}

// Example: Implies
const [a0, b0] = Bool.consts('p q r');
await assertEvaluatesTrue(
  '[Implies]',
  Implies(a0, b0), // a0 -> b0
  // if both a0 and b0 are FALSE, the implication is satisfied
  a0.not(),
  b0.not()
);

// Example: Logic
const [p0, q0, r0] = Bool.consts('p q r');
await assertEvaluatesTrue(
  '[Logic]',
  Implies(p0, q0), // p0 -> q0
  r0.eq(q0), // r0 <==> q0, therefore p0 -> r0
  Or(Not(p0), r0) // ~p0 v r0
);

// Example: Simplification
// (p ^ q ^ TRUE) simplifies to (p ^ q)
const simplifyResult0 = await simplify(And(p0, q0, true));
console.log('[Simplify (p ^ q ^ TRUE)]', simplifyResult0.toString());
// (p ^ FALSE) can only evaluate to FALSE
const simplifyResult1 = await simplify(And(p0, false));
console.log('[Simplify (p ^ FALSE)]', simplifyResult1.toString());

// Example: Usage with numbers
const p2 = Bool.const('p2');
const x2 = Real.const('x2');
await printModelValues(
  '[Usage with numbers]',
  await solve(
    Or(x2.lt(5), x2.gt(10)), // (x2 < 5 || x2 > 10) &&
    Or(p2, x2.pow(2).eq(2)), // (p2 || (x2)^2 == 2) &&
    Not(p2) // p2 is FALSE
  )
);

// Example: De Morgan's Law
const [x3, y3] = Bool.consts('x3 y3');
await assertEvaluatesTrue(
  "[De Morgan's Law]",
  Eq(
    Not(And(x3, y3)), // ~(x3 ^ y3) ==
    Or(Not(x3), Not(y3)) // ~x3 v ~y3
  )
);

// Example: Functions
// https://github.com/Z3Prover/z3/blob/master/src/api/js/src/high-level/high-level.test.ts#L130
const sort_Int = Int.sort();
const [x4, y4] = Int.consts('x4 y4');
const f4 = ctx.Function.declare('g', sort_Int, sort_Int);
// confirms x = y implies g(x) = g(y)
await assertEvaluatesTrue(
  '[Functions: x=y -> g(x) = g(y)]',
  Implies(
    x4.eq(y4), //
    f4.call(x4).eq(f4.call(y4))
  ) //
);
// disproves x = y implies g(g(x)) = g(y)
const conjecture = Implies(
  x4.eq(y4), //
  f4.call(f4.call(x4)).eq(f4.call(y4)) //
);
await assertEvaluatesTrue(
  '[Functions: x=y -> g(g(x)) != g(y)]',
  Not(conjecture)
);

// TODO investigate
// Example: Pseudo-boolean constraints
/*
const [xPBC, yPBC] = Bool.consts('xPBC yPBC');
await assertEvaluatesTrue("[Pseudo-boolean constraints]",
  ctx.PbEq([xPBC, yPBC], [1, 1], 1)
);
const solver = new Solver();
solver.add(PbEq([xPBC, yPBC], [1, 1], 1));
expect(await solver.check()).toStrictEqual('sat');

solver.add(x.eq(y));
expect(await solver.check()).toStrictEqual('unsat');
*/
