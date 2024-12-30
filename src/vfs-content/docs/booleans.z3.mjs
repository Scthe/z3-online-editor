/*
Z3 supports Boolean operators:
- And,
- Or,
- Not,
- Implies (implication),
- If (if-then-else).

Bi-implications are represented using equality .eq().
Comment notation uses "^" and "v" for AND, OR operators.

At the end of this file you will find following utils: _assertEvaluatesTrue(), _printModelValues(), _evalExpr().
*/

// Example: generic 2 OP operatiors
const testBool = async (prefix, op, opStr) => {
  const tt = await _evalExpr(op(true, true));
  const tf = await _evalExpr(op(true, false));
  const ft = await _evalExpr(op(false, true));
  const ff = await _evalExpr(op(false, false));
  console.log(
    prefix,
    `(T ${opStr} T) <=> ${tt.toUpperCase()}, `,
    `(T ${opStr} F) <=> ${tf.toUpperCase()}, `,
    `(F ${opStr} T) <=> ${ft.toUpperCase()}, `,
    `(F ${opStr} F) <=> ${ff.toUpperCase()}`
  );
};
await testBool('[Implies]', Implies, '->');
await testBool('[Iff]', Iff, '<=>');
await testBool('[Eq]', Eq, '=');
await testBool('[Xor]', Xor, '^');
await testBool('[And]', And, 'AND');
await testBool('[Or]', Or, 'OR');
console.log('[Not(true)]', await _evalExpr(Not(true)));
console.log('[Not(false)]', await _evalExpr(Not(false)));

// Example: Implies
const [a0, b0] = Bool.consts('p q r');
await _assertEvaluatesTrue(
  '[Implies]',
  Implies(a0, b0), // a0 -> b0
  // if both a0 and b0 are FALSE, the implication is satisfied
  a0.not(),
  b0.not()
);

// Example: Logic
const [p0, q0, r0] = Bool.consts('p q r');
await _assertEvaluatesTrue(
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
await _printModelValues(
  '[Usage with numbers]',
  await solve(
    Or(x2.lt(5), x2.gt(10)), // (x2 < 5 || x2 > 10) &&
    Or(p2, x2.pow(2).eq(2)), // (p2 || (x2)^2 == 2) &&
    Not(p2) // p2 is FALSE
  )
);

// Example: De Morgan's Law
const [x3, y3] = Bool.consts('x3 y3');
await _assertEvaluatesTrue(
  "[De Morgan's Law]",
  Eq(
    Not(And(x3, y3)), // ~(x3 ^ y3) ==
    Or(Not(x3), Not(y3)) // ~x3 v ~y3
  )
);

// Example: Functions
// https://github.com/Z3Prover/z3/blob/983763213b0207201d9b6b9ede9eb3dd7c4f05ec/src/api/js/src/high-level/high-level.test.ts#L130
const sort_Int = Int.sort();
const [x4, y4] = Int.consts('x4 y4');
const f4 = ctx.Function.declare('g', sort_Int, sort_Int);
// confirms x = y implies g(x) = g(y)
await _assertEvaluatesTrue(
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
await _assertEvaluatesTrue(
  '[Functions: x=y -> g(g(x)) != g(y)]',
  Not(conjecture)
);

// ----- UTILS:
/** assert that set of constraints evaluates to True */
async function _assertEvaluatesTrue(prefix, ...expr) {
  const result = await solve(...expr);
  if (result === 'unsat' || result === 'unknown') {
    console.error(`${prefix} returned '${result}'`);
  } else {
    console.log(`${prefix} OK`);
  }
}

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

/** Evaluate expression using simplify() */
async function _evalExpr(expr) {
  const result = await simplify(expr);
  return result.toString();
}
