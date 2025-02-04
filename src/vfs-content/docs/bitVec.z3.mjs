/*
Docs
 - https://microsoft.github.io/z3guide/docs/theories/Bitvectors
 - https://book.jorianwoltjer.com/cryptography/custom-ciphers/z3-solver#bitwise-operations

At the end of this file you will find following utils: _evalBitVec(), _evalBool(), _evalExpr(), _parseBitVec2Number().
*/

const b0 = BitVec.val(0, 8); // 0 in 8bit
const b1 = BitVec.val(1, 8); // 0b01 in 8bit
const b2 = BitVec.val(2, 8); // 0b10 in 8bit
const b4 = BitVec.val(4, 8); // 0b100 in 8bit
const b255 = BitVec.val(255, 8); // 0b11111111 in 8bit
const b256 = BitVec.val(256, 8); // 0b0 in 8bit (overflow)
const b257 = BitVec.val(257, 8); // 0b1 in 8bit (overflow)
console.log(
  `b0=${b0.value()},`,
  `b1=${b1.value()},`,
  `b2=${b2.value()},`,
  `b4=${b4.value()},`,
  `b255=${b255.value()},`,
  `b256=${b256.value()},`,
  `b257=${b257.value()}`
);
// test basic operations with 0b100 == dec(4)
console.log('--- basic operations');
console.log(`(!0b100) is `, await _evalBitVec(b4.neg()));
console.log(`(0b100 << 1) is `, await _evalBitVec(b4.shl(1)));
console.log(`(0b100 >> 1) is `, await _evalBitVec(b4.shr(1)));
console.log(
  `(0b100 << 1) - (logical) shift is `,
  await _evalBitVec(b4.lshr(1))
);
console.log(`(0b100 + 1) is `, await _evalBitVec(b4.add(1)));
console.log(`(0b100 - 1) is `, await _evalBitVec(b4.sub(1)));
console.log(`repeat(0b100, 2) is `, await _evalBitVec(b4.repeat(2))); // repeat "0000 0100"
console.log(
  `BV2Int(0b11111111, signed) is `,
  await _evalExpr(BV2Int(b255, true))
);
console.log(
  `BV2Int(0b11111111, unsigned) is `,
  await _evalExpr(BV2Int(b255, false))
);
console.log(`Int2BV(255, base=8) is `, await _evalBitVec(Int2BV(255, 8)));
// bitwise
console.log(`(0b100 & 1) is `, await _evalBitVec(b4.and(1)));
console.log(`(0b100 | 1) is `, await _evalBitVec(b4.or(1)));
console.log(`(not 0b100) is `, await _evalBitVec(b4.not()));

// test basic operations with 0
console.log('--- operations on 0');
console.log(`(0 + 1) is `, await _evalBitVec(b0.add(1)));
console.log(`(0 - 1) is `, await _evalBitVec(b0.sub(1)));
console.log(
  `(0 - 1, signed) underflows:`,
  !(await _evalBool(b0.subNoUndeflow(1, true)))
);
// unsigned is 0..255, so it undeflows at -1
console.log(
  `(0 - 1, unsigned) underflows:`,
  !(await _evalBool(b0.subNoUndeflow(1, false)))
);

// test basic operations with 255
console.log('--- operations on 255');
console.log(`(255 + 1) is `, await _evalBitVec(b255.add(1)));
console.log(`(255 - 1) is `, await _evalBitVec(b255.sub(1)));
console.log(
  `(255 + 1, signed) overflows:`,
  !(await _evalBool(b255.addNoOverflow(1, true)))
);
// unsigned is 0..255, so it overflows at +1
console.log(
  `(255 + 1, unsigned) overflows:`,
  !(await _evalBool(b255.addNoOverflow(1, false)))
);

console.log('--- Operations examples');

// Example: shift base
// ZeroExt extends with leading 0s
console.log(
  `[shift base (0b0001).zeroExt(4)]`,
  await _evalBitVec(BitVec.val(1, 4).zeroExt(4))
);
console.log(
  `[shift base (0b0100).zeroExt(4)]`,
  await _evalBitVec(BitVec.val(4, 4).zeroExt(4))
);
console.log(
  `[shift base (0b1000).zeroExt(4)]`,
  await _evalBitVec(BitVec.val(8, 4).zeroExt(4))
);
// SignExt extends based on sign bit
console.log(
  `[shift base (0b0001).signExt(4)]`, // sign bit is 0
  await _evalBitVec(BitVec.val(1, 4).signExt(4))
);
console.log(
  `[shift base (0b0100).signExt(4)]`, // sign bit is 0
  await _evalBitVec(BitVec.val(4, 4).signExt(4))
);
console.log(
  `[shift base (0b1000).signExt(4)]`, // sign bit is 1, add 4 leading 1s
  await _evalBitVec(BitVec.val(8, 4).signExt(4))
);

// Example: extract
console.log(
  `[0b000001.extract(0, 0)]`,
  await _evalBitVec(BitVec.val(0b000001, 8).extract(0, 0))
);
console.log(
  `[0b000010.extract(1, 1)]`,
  await _evalBitVec(BitVec.val(0b000010, 8).extract(1, 1))
);
console.log(
  `[0b000110.extract(2, 1)]`,
  await _evalBitVec(BitVec.val(0b000110, 8).extract(2, 1))
);
console.log(
  `[0b011110.extract(4, 1)]`,
  await _evalBitVec(BitVec.val(0b011110, 8).extract(4, 1))
);
console.log(
  `[0b011110.extract(2, 3)]`,
  await _evalBitVec(BitVec.val(0b001100, 8).extract(3, 2))
);

// Example: concat binary representations
// result = 0b(00000001 00000000 00000001 00000000)
console.log(
  `[concat b1, b0, b1, b0]`,
  await _evalBitVec(Concat(b1, b0, b1, b0))
);
// result = 0b1010
console.log(
  `[concat last bits of b1, b0, b1, b0]`,
  await _evalBitVec(
    Concat(
      b1.extract(0, 0),
      b0.extract(0, 0),
      b1.extract(0, 0),
      b0.extract(0, 0)
    )
  )
);

// Example: bitwise deMorgan's law
// (!x AND !y) == !(x OR y)
const [xDeM, yDeM] = BitVec.consts('xDeM yDeM', 64);
console.log(
  "[Bitwise deMorgan's law]",
  await _evalExpr(
    xDeM
      .not()
      .and(yDeM.not()) //
      .eq(xDeM.or(yDeM).not())
  )
);

// Example: bitwise arithmetic
// Number x is a power of 2 iff (x & (x-1)) == 0
// e.g. 1, 2, 4, 8, 16, 32, 64, ..
const b_64 = (x) => BitVec.val(x, 64);
const isPowerOfTwo = (x) => _evalBool(x.and(x.sub(b_64(1))).eq(b_64(0)));
console.log('[isPowerOfTwo 0]', await isPowerOfTwo(b_64(0)));
console.log('[isPowerOfTwo 1]', await isPowerOfTwo(b_64(1)));
console.log('[isPowerOfTwo 2]', await isPowerOfTwo(b_64(2)));
console.log('[isPowerOfTwo 5]', await isPowerOfTwo(b_64(5)));
console.log('[isPowerOfTwo 8]', await isPowerOfTwo(b_64(8)));

// Example: signed vs unsigned
// https://microsoft.github.io/z3guide/programming/Z3%20JavaScript%20Examples/#bit-vectors
const xSvU = BitVec.val(10, 8);
const ySvU = BitVec.val(240, 8);
console.log('[10 < 240, unsigned]', await _evalBool(xSvU.ult(ySvU)));
console.log('[10 <= 240, unsigned]', await _evalBool(xSvU.ule(ySvU)));
console.log('[10 > 240, unsigned]', await _evalBool(xSvU.ugt(ySvU)));
console.log('[10 >= 240, unsigned]', await _evalBool(xSvU.uge(ySvU)));
console.log('[10 < 240, signed]', await _evalBool(xSvU.slt(ySvU)));
console.log('[10 <= 240, signed]', await _evalBool(xSvU.sle(ySvU)));
console.log('[10 > 240, signed]', await _evalBool(xSvU.sgt(ySvU)));
console.log('[10 >= 240, signed]', await _evalBool(xSvU.sge(ySvU)));

// Example: popcount
// Count number of raised bits
// E.g. 0b0110 is 2, 0b1111 is 4 etc.
const popcount = async (x) =>
  _parseBitVec2Number(
    await _evalExpr(
      // extract bit 0, turn into 32-bit int so we can add normally
      x
        .extract(0, 0)
        .zeroExt(32)
        .add(x.extract(1, 1).zeroExt(32)) // add bit 1
        .add(x.extract(2, 2).zeroExt(32)) // add bit 2
        .add(x.extract(3, 3).zeroExt(32)) // add bit 3
    )
  );
console.log('[popcount      0]', await popcount(b_64(0)));
console.log('[popcount    0b1]', await popcount(b_64(1)));
console.log('[popcount   0b10]', await popcount(b_64(2)));
console.log('[popcount  0b011]', await popcount(b_64(3)));
console.log('[popcount  0b100]', await popcount(b_64(4)));
console.log('[popcount  0b101]', await popcount(b_64(5)));
console.log('[popcount  0b110]', await popcount(b_64(6)));
console.log('[popcount  0b111]', await popcount(b_64(7)));
console.log('[popcount 0b1000]', await popcount(b_64(8)));
console.log('[popcount 0b1001]', await popcount(b_64(9)));
console.log('[popcount 0b1010]', await popcount(b_64(10)));
console.log('[popcount 0b1011]', await popcount(b_64(11)));
console.log('[popcount 0b1100]', await popcount(b_64(12)));
console.log('[popcount 0b1101]', await popcount(b_64(13)));
console.log('[popcount 0b1110]', await popcount(b_64(14)));
console.log('[popcount 0b1111]', await popcount(b_64(15)));

// ----- UTILS:
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
