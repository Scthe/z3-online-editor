/*
At the end of this file you will find following utils: _printModelValues(), _evalExpr().
*/

// Example: eqIdentity
// Compares 2 ASTs
const [x, y, z] = Consts('x y z', Int.sort());
console.log(
  '[eqIdentity]',
  ctx.eqIdentity(
    x.add(z), // (x + z)
    substitute(x.add(y), [y, z]) // in (x + y) replace y with z
  )
);

// Example: Create from simple types
console.log('[from Int]', await _evalExpr(ctx.from(3)));
// Personally, I recommend to use Real.val(3.2) instead
console.log('[from Real]', await _evalExpr(ctx.from(3.2)));
console.log('[from Bool]', await _evalExpr(ctx.from(true)));

// Example: If
console.log(
  '[If true ? 1 : 0]',
  await _evalExpr(If(ctx.from(true), ctx.from(1), ctx.from(0)))
);
console.log(
  '[If false ? 1 : 0]',
  await _evalExpr(
    If(false, 1, 0) // you can write this way too
  )
);

// Example: Bools
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
console.log('[And(TRUE, TRUE, TRUE)]', await _evalExpr(And(true, true, true)));
console.log(
  '[And(TRUE, FALSE, TRUE)]',
  await _evalExpr(And(true, false, true))
);
console.log(
  '[And(FALSE, FALSE, FALSE)]',
  await _evalExpr(And(false, false, false))
);
await testBool('[Or]', Or, 'OR');
console.log('[Or(TRUE, TRUE, TRUE)]', await _evalExpr(Or(true, true, true)));
console.log('[Or(TRUE, FALSE, TRUE)]', await _evalExpr(Or(true, false, true)));
console.log(
  '[Or(FALSE, FALSE, FALSE)]',
  await _evalExpr(Or(false, false, false))
);
console.log('[Not(true)]', await _evalExpr(Not(true)));
console.log('[Not(false)]', await _evalExpr(Not(false)));

// Example: Arith
// 4 + 2 + 1 = 7. No exposed context fn. Provided for completion
console.log('[4.add(2).add(1)]', await _evalExpr(ctx.from(4).add(2).add(1)));
// 4 - 2 - 1 = 1
console.log('[Sub(4, 2, 1)]', await _evalExpr(Sub(ctx.from(4), 2, 1)));
// 2 * 3 * 4 = 24
console.log('[Product(2, 3, 4)]', await _evalExpr(Product(ctx.from(2), 3, 4)));
console.log('[Div(4, 2)]', await _evalExpr(Div(ctx.from(4), 2)));
console.log('[Div(2, 4)]', await _evalExpr(Div(ctx.from(2), 4)));
console.log('[Div(1, 3)]', await _evalExpr(Div(ctx.from(1), 3)));
console.log('[Div(Real(4), 2)]', await _evalExpr(Div(Real.val(4.0), 2.0)));
console.log('[Div(Real(2), 4)]', await _evalExpr(Div(Real.val(2.0), 4.0)));
console.log('[Div(Real(1), 3)]', await _evalExpr(Div(Real.val(1.0), 3.0)));
console.log('[Mod(4, 2)]', await _evalExpr(Mod(ctx.from(4), 2)));
console.log('[Mod(4, 3)]', await _evalExpr(Mod(ctx.from(4), 3)));
console.log('[Mod(-4, 3)]', await _evalExpr(Mod(ctx.from(-4), 3)));
console.log('[Sqrt(4)]', await _evalExpr(Sqrt(4)));
console.log('[Sqrt(2)]', await _evalExpr(Sqrt(2)));
console.log('[Cbrt(8)]', await _evalExpr(Cbrt(8)));
console.log('[Cbrt(2)]', await _evalExpr(Cbrt(2)));
console.log('[Neg(2)]', await _evalExpr(Neg(ctx.from(2))));
console.log('[Neg(-2)]', await _evalExpr(Neg(ctx.from(-2))));
console.log('[Neg(0)]', await _evalExpr(Neg(ctx.from(0))));

// Example: Distinct
// This function is used VERY often
await _printModelValues(
  '[Distinct]',
  await solve(
    x.ge(0),
    x.lt(3), // x in range [0, 1, 2]
    y.ge(0),
    y.lt(3), // y in range [0, 1, 2]
    z.ge(0),
    z.lt(3), // z in range [0, 1, 2]
    // x, y, z only have same 3 possible values,
    // and all of them need to have different values (unique)
    Distinct(x, y, z)
  )
);

// Example: Sum
// This function is used VERY often
await _printModelValues(
  '[Sum]',
  await solve(
    x.ge(0),
    x.lt(3), // x in range [0, 1, 2]
    y.ge(0),
    y.lt(3), // y in range [0, 1, 2]
    z.ge(0),
    z.lt(3), // z in range [0, 1, 2]
    // x, y, z only have same 3 possible values,
    // and they have to sum to 6
    Sum(x, y, z).eq(6)
  )
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

/** Evaluate expression using simplify() */
async function _evalExpr(expr) {
  const result = await simplify(expr);
  return result.toString();
}
