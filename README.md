# Z3 online editor ([DEMO](https://scthe.github.io/z3-online-editor/))

[Z3 Theorem Prover](https://github.com/Z3Prover/z3) is Microsoft's library used to verify if a formula is satisfiable. Imagine a game of [Sudoku](https://en.wikipedia.org/wiki/Sudoku). Given the game rules and the board state, is it possible to place numbers so that all constraints are satisfied?

Speaking more formally, Z3 is a satisfiability modulo theories (first-order formulas that also include e.g. integer or bit-vector arithmetic, arrays, etc.) solver. It is targeted at solving problems that arise in software verification and program analysis. Its main applications are extended static checking, test case generation, and predicate abstraction. It is mainly used through its' Python API.

In [this app](https://scthe.github.io/z3-online-editor/), I've implemented a basic online editor for the JavaScript/WASM version of Z3. It features typings and autocomplete to make it easier to learn. The main value is the live documentation showcasing all the different functions. Open each file and click `Run` to evaluate the code. Change the code and then run it again. Experimentation is one of the most effective ways to learn. I've also added a few example apps.


https://github.com/user-attachments/assets/3b95220b-164c-4809-90ce-e1be3c29347c

*Run sudoku solver written using Z3 in a web browser.*



## Usage

1. `yarn install`
1. `yarn dev` - start the dev server
1. Go to [http://localhost:8000/](http://localhost:8000/).

Or, `yarn build` builds the prod version into `./build`.

## FAQ

### Is this a complete version of Z3?

This app uses the official WASM version of Z3. Unfortunately, it lacks a few features (e.g. datatypes, tactics) and functions. But for most usages is good enough.

JavaScript does not have operator overloading, which so the result can be clunky. Running solvers is modeled as an async operation. Do not forget `await`.

### Is TypeScript supported?

No, only JavaScript.


### The code execution is stuck?

Happens. Sometimes you write a code that is unsatisfiable, but Z3 will still try to calculate it. When this happens, press the `"Stop"` button or just refresh the browser tab. All changes you make are automatically saved to the `localStorage`.

### Where can I find more Z3 documentation?

When you open the app, look for `./readme.md` file. It contains a lot of links.

### How to update the Z3 version?

1. Bump `z3-solver` version in `package.json`.
2. Copy the following files from the downloaded package into `./static`:
   1. `z3-built.js`, `z3-built.wasm`, `z3-built.worker.js`.
3. Copy new TypeScript typings into `./src/vfs-content/types/types.z3.d.ts`.
   1. The current file has a lot of new docs added by me. You might have to solve a few conflicts.

## Honourable mentions

* Microsoft for it's support for Z3.
* [ericpony](https://github.com/ericpony/z3py-tutorial) for his work on [https://ericpony.github.io/z3py-tutorial/guide-examples.htm](https://ericpony.github.io/z3py-tutorial/guide-examples.htm).
* Jane Street for [puzzles](https://www.janestreet.com/puzzles/current-puzzle/).
