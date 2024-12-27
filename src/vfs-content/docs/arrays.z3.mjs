// https://microsoft.github.io/z3guide/docs/theories/Arrays/

// It's rare to need z3's Array. You probably want e.g.
//  > const [x, y] = Int.consts('x y');
// Or a JavaScript array:
//  > [0, 0, 0].map((_, idx) => Int.const(`x_${idx}`));

// "Array" is a reserved keyword in JS,
// we have to access it through ctx.Array().
// a0 is an array from integer to integer.
const a0 = ctx.Array.const('a1', Int.sort(), Int.sort());
// NOTE: (Set T) can be implemented as (Array T Bool)

// Example: Write and read Int
const a1 = Store(a0, 1, 10); // a0[1] = 10; (makes a copy)
console.log('[Write and read Int]', (await simplify(Select(a1, 1))).toString());

// Example: Write and read Arith
const x0 = Int.const('x0');
const a2 = Store(a0, 2, x0.add(1)); // a0[2] = x0 + 1; (makes a copy)
console.log(
  '[Write and read Arith]',
  (await simplify(Select(a2, 2))).toString()
);
// use with solver
const solver = new Solver();
solver.add(x0.eq(9));
await solver.check();
const model = solver.model();
console.log(
  '[Write and read Arith with Solver]',
  'x0 =',
  model.eval(x0).toString(), // 9
  ', array[2] =',
  // we can use a2.select(...) instead of Select(a2, ...)
  model.eval(a2.select(2)).toString() // 9 + 1
);
