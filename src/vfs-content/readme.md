# Z3 Theorem Prover

Z3 Theorem Prover is a satisfiability modulo theories (first-order formulas that also include e.g. integer or bit-vector arithmetic, arrays, etc.) solver developed by Microsoft. It is targeted at solving problems arising in software verification and program analysis. Its main applications are extended static checking, test case generation, and predicate abstraction.

## Official Z3 Links

- <https://www.microsoft.com/en-us/research/project/z3-3/> - official page
- <https://github.com/Z3Prover/z3> - GitHub
- <https://github.com/Z3Prover/z3/blob/master/src/api/js/src/high-level/types.ts> - TypeScript typings
- <https://github.com/Z3Prover/z3/wiki#background> - wiki
- <https://z3prover.github.io/papers/programmingz3.html> - official tutorial
- <https://z3prover.github.io/papers/z3internals.html> - Z3 internals
- <https://microsoft.github.io/z3guide/docs/logic/intro/> - official tutorial
- <https://github.com/Z3Prover/z3/wiki/Publications> - publications

## Community Z3 links

- <https://z3prover.github.io/api/html/namespacez3py> - PY API docs
- <https://ericpony.github.io/z3py-tutorial/guide-examples.htm>
- <https://ericpony.github.io/z3py-tutorial/advanced-examples.htm>
- <https://ece.uwaterloo.ca/~agurfink/ece653/assets/pdf/W04-UsingZ3.pdf>
- <https://book.jorianwoltjer.com/cryptography/custom-ciphers/z3-solver#bitwise-operations>
- "Programming with Triggers" by Michał Moskal for a cool description of the Hyper-V kernel verification story.
- <https://github.com/Z3Prover/z3/wiki/Slides> - link aggregation
- <https://github.com/0vercl0k/z3-playground> - more example apps


## Where should I start?

I recommend starting with `docs/numeric.mjs`. It showcases basic operations for integers and real numbers. Afterward, check out `examples/`.


## Files in this project

- `docs`. Examples of each of the major Z3 features.
    - `arrays.mjs`. Z3 arrays. They are not that popular in practice.
    - `bitVec.mjs`. Bit vectors for single-bit manipulations or unsigned/signed two-complements arithmetic.
    - `booleans.mjs`. Logic operators, De Morgan's Law, uninterpreted functions.
    - `context.mjs`. Z3 context is the basis of the API. This file contains an example for each of the accessible functions.
    - `numeric.mjs`. Showcases operations on integers and real numbers. That is a good starting point.
    - `quantifiers.mjs`. Explains `ForAll` and `Exists` quantifiers.
    - `solver.mjs`. Examples of Solver class (e.g. to get multiple solutions), `solve()`, and `simplify()` functions.
- `examples`. Apps using Z3.
- `types`. Shortcut for TypeScript typings. The editor already handles JSDoc and "go to definition".
    - JSDoc examples might be in Python, as this is the main language used with Z3. It should be similar enough.

