// https://ericpony.github.io/z3py-tutorial/guide-examples.htm
// https://ericpony.github.io/z3py-tutorial/advanced-examples.htm
// https://z3prover.github.io/api/html/namespacez3py.html

const x = ctx.Int.const('x');
const y = ctx.Real.val('my-real');

const solver = new ctx.Solver();
solver.add(And(x.ge(0), x.le(9)));
const result = await solver.check();
console.log(result);
