function printModelValues(prefix, model) {
  if (!model || typeof model !== 'object') {
    console.error(`${prefix} Could not print model values. Model:`, model);
    return;
  }
  for (const k of model.values()) {
    console.log(prefix, `${k.name()}:`, model.eval(k.call()).toString());
  }
}

// Example: Kinematic equations 1
// Calculate the distance "d" and time "t" during
// the car breaking to full stop.
// You are given initial speed and deceleration rate.
// Source: https://ericpony.github.io/z3py-tutorial/guide-examples.htm
let [d, a, t, vStart, vFinal] = Real.consts('d a t vStart vFinal');
printModelValues(
  '[Kinematic equations 1]',
  await solve(
    // Kinematic equations
    // d = v*t + a*(t^2)/2
    d.eq(vStart.mul(t).add(a.mul(t).mul(t).div(2))),
    // v = v0 + at
    vFinal.eq(vStart.add(a.mul(t))),
    // constants
    vStart.eq(30),
    vFinal.eq(0), // stops completely
    a.eq(-8)
  )
);

// Example: Kinematic equations 2
// Calculate the distance "d" and final speed
// after acceleration from a full stop.
// You are given time and acceleration rate.
// Source: https://ericpony.github.io/z3py-tutorial/guide-examples.htm
[d, a, t, vStart, vFinal] = Real.consts('d a t vStart vFinal');
printModelValues(
  '[Kinematic equations 2]',
  await solve(
    // Kinematic equations
    // d = v*t + a*(t^2)/2
    d.eq(vStart.mul(t).add(a.mul(t).mul(t).div(2))),
    // v = v0 + at
    vFinal.eq(vStart.add(a.mul(t))),
    // constants
    vStart.eq(0),
    t.eq(4.1),
    a.eq(6)
  )
);
