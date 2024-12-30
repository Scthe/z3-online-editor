/*
Docs:
- https://microsoft.github.io/z3guide/docs/logic/Quantifiers/
- https://github.com/Z3Prover/z3/blob/983763213b0207201d9b6b9ede9eb3dd7c4f05ec/src/api/js/src/high-level/high-level.test.ts#L649

At the end of this file you will find following utils: __assertEvaluatesTrue().
*/

// Example: ForAll
const [xFA, yFA] = Int.consts('xFA yFA');
await _assertEvaluatesTrue(
  '[ForAll]',
  ForAll(
    [xFA, yFA],
    // x and y being different implies one is greater then other
    // x != y -> (x < y) v (x > y)
    xFA.neq(yFA).implies(xFA.lt(yFA).or(xFA.gt(yFA)))
  )
);

// Example: Exists
const [xE, yE, zE] = Int.consts('xE yE zE');
// impossible quantifier
// (x > y) ^ (Exists z: (x <= z <= y))
const quantifier = Exists([zE], xE.gt(yE).and(xE.le(zE).and(zE.le(yE))));
await _assertEvaluatesTrue('[Exists]', Not(quantifier));

// Example: Exists (scope test)
const [xE2, yE2, zE2] = Int.consts('xE2 yE2 zE2');
// (x <= z <= y)
const quantifier2 = Exists([zE2], xE2.le(zE2).and(zE2.le(yE2)));
await _assertEvaluatesTrue(
  '[Exists (scope test)]',
  // Trying to prove:
  // (x > y) ^ (Exists z: (x <= z <= y))
  Not(xE2.gt(yE2).and(quantifier2))
);

// Example: Lambda
const [xL, yL] = Int.consts('xL yL');
const L = Lambda([xL, yL], xL.add(yL));
await _assertEvaluatesTrue(
  '[Lambda]',
  // use Array operations to "invoke" the lambda
  L.select(Int.val(2), Int.val(5)) //
    .eq(Int.val(7))
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
