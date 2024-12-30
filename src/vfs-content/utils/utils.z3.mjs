/*
This file contains a few useful utilities that are used in my examples.
*/

/** Evaluate expression using simplify() */
async function _evalExpr(expr) {
  const result = await simplify(expr);
  return result.toString();
}

/** Parse BitVec string to a number */
function _parseBitVec2Number(x) {
  return x.startsWith('#b')
    ? parseInt(x.replace('#b', ''), 2)
    : parseInt(x.replace('#x', '0x'), 16);
}

/** Evaluate BitVec expression and pretty-print it */
async function _evalBitVec(expr) {
  const result = await _evalExpr(expr);
  const num = _parseBitVec2Number(result);
  if (isNaN(num)) return 'NaN';
  return `0b${num.toString(2)} (dec ${num}), ${expr.size()}bit`;
}

/** Evaluate bool expression */
async function _evalBool(expr) {
  const result = await _evalExpr(expr);
  return result === 'true';
}

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
function printModelValues(prefix, model) {
  if (!model || typeof model !== 'object') {
    console.error(`${prefix} Could not print model values. Model:`, model);
    return;
  }
  for (const k of model.values()) {
    console.log(prefix, `${k.name()}:`, model.eval(k.call()).toString());
  }
}

/** Run solver and print all model values */
async function _executeSolver(prefix, solver) {
  const result = await solver.check();
  if (result !== 'sat') {
    console.log(prefix, 'is unsatisfiable');
    return;
  }

  const model = solver.model();
  _printModelValues(prefix, model);
  return model;
}
