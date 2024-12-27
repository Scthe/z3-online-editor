import { Z3_ast, Z3_ast_map, Z3_ast_vector, Z3_context, Z3_decl_kind, Z3_func_decl, Z3_func_entry, Z3_func_interp, Z3_model, Z3_probe, Z3_solver, Z3_optimize, Z3_sort, Z3_sort_kind, Z3_tactic } from '../low-level';
/** @hidden */
export declare type AnySort<Name extends string = 'main'> = Sort<Name> | BoolSort<Name> | ArithSort<Name> | BitVecSort<number, Name> | SMTArraySort<Name>;
/** @hidden */
export declare type AnyExpr<Name extends string = 'main'> = Expr<Name> | Bool<Name> | Arith<Name> | IntNum<Name> | RatNum<Name> | BitVec<number, Name> | BitVecNum<number, Name> | SMTArray<Name>;
/** @hidden */
export declare type AnyAst<Name extends string = 'main'> = AnyExpr<Name> | AnySort<Name> | FuncDecl<Name>;
/** @hidden */
export declare type SortToExprMap<S extends AnySort<Name>, Name extends string = 'main'> = S extends BoolSort ? Bool<Name> : S extends ArithSort<Name> ? Arith<Name> : S extends BitVecSort<infer Size, Name> ? BitVec<Size, Name> : S extends SMTArraySort<Name, infer DomainSort, infer RangeSort> ? SMTArray<Name, DomainSort, RangeSort> : S extends Sort<Name> ? Expr<Name, S, Z3_ast> : never;
/** @hidden */
export declare type CoercibleFromMap<S extends CoercibleToExpr<Name>, Name extends string = 'main'> = S extends bigint ? Arith<Name> : S extends number | CoercibleRational ? RatNum<Name> : S extends boolean ? Bool<Name> : S extends Expr<Name> ? S : never;
/** @hidden */
export declare type CoercibleToBitVec<Bits extends number = number, Name extends string = 'main'> = bigint | number | BitVec<Bits, Name>;
export declare type CoercibleRational = {
    numerator: bigint | number;
    denominator: bigint | number;
};
/** @hidden */
export declare type CoercibleToExpr<Name extends string = 'main'> = number | bigint | boolean | CoercibleRational | Expr<Name>;
/** @hidden */
export declare type CoercibleToArith<Name extends string = 'main'> = number | string | bigint | CoercibleRational | Arith<Name>;
/** @hidden */
export declare type CoercibleToMap<T extends AnyExpr<Name>, Name extends string = 'main'> = T extends Bool<Name> ? boolean | Bool<Name> : T extends IntNum<Name> ? bigint | number | IntNum<Name> : T extends RatNum<Name> ? bigint | number | CoercibleRational | RatNum<Name> : T extends Arith<Name> ? CoercibleToArith<Name> : T extends BitVec<infer Size, Name> ? CoercibleToBitVec<Size, Name> : T extends SMTArray<Name, infer DomainSort, infer RangeSort> ? SMTArray<Name, DomainSort, RangeSort> : T extends Expr<Name> ? Expr<Name> : never;
/**
 * Used to create a Real constant
 *
 * ```js
 * const x = from({ numerator: 1, denominator: 3 })
 *
 * x
 * // 1/3
 * isReal(x)
 * // true
 * isRealVal(x)
 * // true
 * x.asNumber()
 * // 0.3333333333333333
 * ```
 * @see {@link Context.from}
 * @category Global
 */
export declare class Z3Error extends Error {
}
export declare class Z3AssertionError extends Z3Error {
}
/** @category Global */
export declare type CheckSatResult = 'sat' | 'unsat' | 'unknown';
/** @hidden */
export interface ContextCtor {
    <Name extends string>(name: Name, options?: Record<string, any>): Context<Name>;
}
export interface Context<Name extends string = 'main'> {
    /** @hidden */
    readonly ptr: Z3_context;
    /**
     * Name of the current Context
     *
     * ```js
     * const c = new Context('main')
     *
     * c.name
     * // 'main'
     * ```
     */
    readonly name: Name;
    /** @category Functions */
    interrupt(): void;
    /** @category Functions */
    isModel(obj: unknown): obj is Model<Name>;
    /** @category Functions */
    isAst(obj: unknown): obj is Ast<Name>;
    /** @category Functions */
    isSort(obj: unknown): obj is Sort<Name>;
    /** @category Functions */
    isFuncDecl(obj: unknown): obj is FuncDecl<Name>;
    /** @category Functions */
    isFuncInterp(obj: unknown): obj is FuncInterp<Name>;
    /** @category Functions */
    isApp(obj: unknown): boolean;
    /** @category Functions */
    isConst(obj: unknown): boolean;
    /** @category Functions */
    isExpr(obj: unknown): obj is Expr<Name>;
    /** @category Functions */
    isVar(obj: unknown): boolean;
    /** @category Functions */
    isAppOf(obj: unknown, kind: Z3_decl_kind): boolean;
    /** @category Functions */
    isBool(obj: unknown): obj is Bool<Name>;
    /** @category Functions */
    isTrue(obj: unknown): boolean;
    /** @category Functions */
    isFalse(obj: unknown): boolean;
    /** @category Functions */
    isAnd(obj: unknown): boolean;
    /** @category Functions */
    isOr(obj: unknown): boolean;
    /** @category Functions */
    isImplies(obj: unknown): boolean;
    /** @category Functions */
    isNot(obj: unknown): boolean;
    /** @category Functions */
    isEq(obj: unknown): boolean;
    /** @category Functions */
    isDistinct(obj: unknown): boolean;
    /** @category Functions */
    isQuantifier(obj: unknown): obj is Quantifier<Name>;
    /** @category Functions */
    isArith(obj: unknown): obj is Arith<Name>;
    /** @category Functions */
    isArithSort(obj: unknown): obj is ArithSort<Name>;
    /** @category Functions */
    isInt(obj: unknown): boolean;
    /** @category Functions */
    isIntVal(obj: unknown): obj is IntNum<Name>;
    /** @category Functions */
    isIntSort(obj: unknown): boolean;
    /** @category Functions */
    isReal(obj: unknown): boolean;
    /** @category Functions */
    isRealVal(obj: unknown): obj is RatNum<Name>;
    /** @category Functions */
    isRealSort(obj: unknown): boolean;
    /** @category Functions */
    isBitVecSort(obj: unknown): obj is BitVecSort<number, Name>;
    /** @category Functions */
    isBitVec(obj: unknown): obj is BitVec<number, Name>;
    /** @category Functions */
    isBitVecVal(obj: unknown): obj is BitVecNum<number, Name>;
    /** @category Functions */
    isArraySort(obj: unknown): obj is SMTArraySort<Name>;
    /** @category Functions */
    isArray(obj: unknown): obj is SMTArray<Name>;
    /** @category Functions */
    isConstArray(obj: unknown): boolean;
    /** @category Functions */
    isProbe(obj: unknown): obj is Probe<Name>;
    /** @category Functions */
    isTactic(obj: unknown): obj is Tactic<Name>;
    /** @category Functions */
    isAstVector(obj: unknown): obj is AstVector<Name, AnyAst<Name>>;
    /**
     * Returns whether two Asts are the same thing
     * @category Functions */
    eqIdentity(a: Ast<Name>, b: Ast<Name>): boolean;
    /** @category Functions */
    getVarIndex(obj: Expr<Name>): number;
    /**
     * Coerce a boolean into a Bool expression
     * @category Functions */
    from(primitive: boolean): Bool<Name>;
    /**
     * Coerce a number to an Int or Real expression (integral numbers become Ints)
     * @category Functions */
    from(primitive: number): IntNum<Name> | RatNum<Name>;
    /**
     * Coerce a rational into a Real expression
     * @category Functions */
    from(primitive: CoercibleRational): RatNum<Name>;
    /**
     * Coerce a big number into a Integer expression
     * @category Functions */
    from(primitive: bigint): IntNum<Name>;
    /**
     * Returns whatever expression was given
     * @category Functions */
    from<E extends Expr<Name>>(expr: E): E;
    /** @hidden */
    from(value: CoercibleToExpr<Name>): AnyExpr<Name>;
    /**
     * Sugar function for getting a model for given assertions
     *
     * ```js
     * const x = Int.const('x');
     * const y = Int.const('y');
     * const result = await solve(x.le(y));
     * if (isModel(result)) {
     *   console.log('Z3 found a solution');
     *   console.log(`x=${result.get(x)}, y=${result.get(y)}`);
     * } else {
     *   console.error('No solution found');
     * }
     * ```
     *
     * @see {@link Solver}
     * @category Functions */
    solve(...assertions: Bool<Name>[]): Promise<Model<Name> | 'unsat' | 'unknown'>;
    /**
     * Creates a Solver
     * @param logic - Optional logic which the solver will use. Creates a general Solver otherwise
     * @category Classes
     */
    readonly Solver: new (logic?: string) => Solver<Name>;
    readonly Optimize: new () => Optimize<Name>;
    /**
     * Creates an empty Model
     * @see {@link Solver.model} for common usage of Model
     * @category Classes
     */
    readonly Model: new () => Model<Name>;
    /** @category Classes */
    readonly AstVector: new <Item extends Ast<Name> = AnyAst<Name>>() => AstVector<Name, Item>;
    /** @category Classes */
    readonly AstMap: new <Key extends Ast<Name> = AnyAst<Name>, Value extends Ast<Name> = AnyAst<Name>>() => AstMap<Name, Key, Value>;
    /** @category Classes */
    readonly Tactic: new (name: string) => Tactic<Name>;
    /** @category Expressions */
    readonly Sort: SortCreation<Name>;
    /** @category Expressions */
    readonly Function: FuncDeclCreation<Name>;
    /** @category Expressions */
    readonly RecFunc: RecFuncCreation<Name>;
    /** @category Expressions 
     * 
     * Create Bool types
    */
    readonly Bool: BoolCreation<Name>;
    /** @category Expressions 
     * 
     * Create Int types
    */
    readonly Int: IntCreation<Name>;
    /** @category Expressions 
     * 
     * Create Real types
    */
    readonly Real: RealCreation<Name>;
    /** @category Expressions 
     * 
     * Create BitVec types
    */
    readonly BitVec: BitVecCreation<Name>;
    /** @category Expressions 
     * 
     * Create Array types
    */
    readonly Array: SMTArrayCreation<Name>;
    /** @category Operations */
    Const<S extends Sort<Name>>(name: string, sort: S): SortToExprMap<S, Name>;
    /** @category Operations */
    Consts<S extends Sort<Name>>(name: string | string[], sort: S): SortToExprMap<S, Name>[];
    /** @category Operations */
    FreshConst<S extends Sort<Name>>(sort: S, prefix?: string): SortToExprMap<S, Name>;
    /** @category Operations */
    Var<S extends Sort<Name>>(idx: number, sort: S): SortToExprMap<S, Name>;
    /** 
     * @category Operations
     * 
     * Create a Z3 if-then-else expression.
     */
    If(condition: Probe<Name>, onTrue: Tactic<Name>, onFalse: Tactic<Name>): Tactic<Name>;
    If<OnTrueRef extends CoercibleToExpr<Name>, OnFalseRef extends CoercibleToExpr<Name>>(condition: Bool<Name> | boolean, onTrue: OnTrueRef, onFalse: OnFalseRef): CoercibleFromMap<OnTrueRef | OnFalseRef, Name>;
    /** 
     * @category Operations
     * 
     * Create a Z3 distinct expression. Has value `True` if all provided args evaluate to different values.
     */
    Distinct(...args: CoercibleToExpr<Name>[]): Bool<Name>;
    /** 
     * @category Operations 
     * 
     * Create a Z3 implies logic expression `a -> b`.
     */
    Implies(a: Bool<Name> | boolean, b: Bool<Name> | boolean): Bool<Name>;
    /** @category Operations 
     * 
     * If and only if.
     * 
     * https://en.wikipedia.org/wiki/If_and_only_if
    */
    Iff(a: Bool<Name> | boolean, b: Bool<Name> | boolean): Bool<Name>;
    /** @category Operations */
    Eq(a: CoercibleToExpr<Name>, b: CoercibleToExpr<Name>): Bool<Name>;
    /** @category Operations */
    Xor(a: Bool<Name> | boolean, b: Bool<Name> | boolean): Bool<Name>;
    /** @category Operations */
    Not(a: Probe<Name>): Probe<Name>;
    /** @category Operations */
    Not(a: Bool<Name> | boolean): Bool<Name>;
    /** @category Operations */
    And(): Bool<Name>;
    /** @category Operations */
    And(vector: AstVector<Name, Bool<Name>>): Bool<Name>;
    /** @category Operations */
    And(...args: (Bool<Name> | boolean)[]): Bool<Name>;
    /** @category Operations */
    And(...args: Probe<Name>[]): Probe<Name>;
    /** @category Operations */
    Or(): Bool<Name>;
    /** @category Operations */
    Or(vector: AstVector<Name, Bool<Name>>): Bool<Name>;
    /** @category Operations */
    Or(...args: (Bool<Name> | boolean)[]): Bool<Name>;
    /** @category Operations */
    Or(...args: Probe<Name>[]): Probe<Name>;
    /** @category Operations 
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#-ForAll
    */
    ForAll<QVarSorts extends NonEmptySortArray<Name>>(quantifiers: ArrayIndexType<Name, QVarSorts>, body: Bool<Name>, weight?: number): Quantifier<Name, QVarSorts, BoolSort<Name>> & Bool<Name>;
    /** @category Operations 
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#-Exists
    */
    Exists<QVarSorts extends NonEmptySortArray<Name>>(quantifiers: ArrayIndexType<Name, QVarSorts>, body: Bool<Name>, weight?: number): Quantifier<Name, QVarSorts, BoolSort<Name>> & Bool<Name>;
    /** @category Operations */
    Lambda<DomainSort extends NonEmptySortArray<Name>, RangeSort extends Sort<Name>>(quantifiers: ArrayIndexType<Name, DomainSort>, expr: SortToExprMap<RangeSort, Name>): Quantifier<Name, DomainSort, SMTArraySort<Name, DomainSort, RangeSort>> & SMTArray<Name, DomainSort, RangeSort>;
    /** @category Operations */
    ToReal(expr: Arith<Name> | bigint): Arith<Name>;
    /** @category Operations */
    ToInt(expr: Arith<Name> | number | CoercibleRational | string): Arith<Name>;
    /**
     * Create an IsInt Z3 predicate
     *
     * ```js
     * const x = Real.const('x');
     * await solve(IsInt(x.add("1/2")), x.gt(0), x.lt(1))
     * // x = 1/2
     * await solve(IsInt(x.add("1/2")), x.gt(0), x.lt(1), x.neq("1/2"))
     * // unsat
     * ```
     * @category Operations */
    IsInt(expr: Arith<Name> | number | CoercibleRational | string): Bool<Name>;
    /**
     * Returns a Z3 expression representing square root of a
     *
     * ```typescript
     * const a = Real.const('a');
     *
     * Sqrt(a);
     * // a**(1/2)
     * ```
     * @category Operations */
    Sqrt(a: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Returns a Z3 expression representing cubic root of a
     *
     * ```typescript
     * const a = Real.const('a');
     *
     * Cbrt(a);
     * // a**(1/3)
     * ```
     * @category Operations */
    Cbrt(a: CoercibleToArith<Name>): Arith<Name>;
    /** @category Operations 
     * 
     * Convert BitVec to Int 
    */
    BV2Int(a: BitVec<number, Name>, isSigned: boolean): Arith<Name>;
    /** @category Operations 
     * 
     * Convert Int to BitVec
     */
    Int2BV<Bits extends number>(a: Arith<Name> | bigint | number, bits: Bits): BitVec<Bits, Name>;
    /** 
     * @category Operations 
     * 
     * Create a Z3 bit-vector concatenation expression.
     * 
     * E.g. `Concat(BitVec.val(1, 8), BitVec.val(0, 8), BitVec.val(1, 8))` results in:
     * - Bitvec: 00000001 00000000 00000001
     */
    Concat(...bitvecs: BitVec<number, Name>[]): BitVec<number, Name>;
    /** 
     * @category Operations 
     * 
     * Return a tactic that applies tactic `t1` to a goal if probe `p` evaluates to true, and `t2` otherwise.
     */
    Cond(probe: Probe<Name>, onTrue: Tactic<Name>, onFalse: Tactic<Name>): Tactic<Name>;
    /** @category Operations 
     * 
     * less than
    */
    LT(a: Arith<Name>, b: CoercibleToArith<Name>): Bool<Name>;
    /** @category Operations 
     * 
     * greater than
    */
    GT(a: Arith<Name>, b: CoercibleToArith<Name>): Bool<Name>;
    /** @category Operations 
     * 
     * less or equal
    */
    LE(a: Arith<Name>, b: CoercibleToArith<Name>): Bool<Name>;
    /** @category Operations 
     * 
     * greater or equal
    */
    GE(a: Arith<Name>, b: CoercibleToArith<Name>): Bool<Name>;
    /** @category Operations 
     * 
     * unsigned less than
    */
    ULT<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * unsigned greater than
    */
    UGT<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * unsigned less or equal
    */
    ULE<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * unsigned greater or equal
    */
    UGE<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * signed less than
    */
    SLT<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * signed greater than
    */
    SGT<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * signed greater or equal
    */
    SGE<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * signed less or equal
    */
    SLE<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * Create the sum of the Z3 expressions.
     * 
     * ```js
     * >>> a, b, c = Ints('a b c')
     * >>> Sum(a, b, c)
     * a + b + c
     * ```
     */
    Sum(arg0: Arith<Name>, ...args: CoercibleToArith<Name>[]): Arith<Name>;
    Sum<Bits extends number>(arg0: BitVec<Bits, Name>, ...args: CoercibleToBitVec<Bits, Name>[]): BitVec<Bits, Name>;
    Sub(arg0: Arith<Name>, ...args: CoercibleToArith<Name>[]): Arith<Name>;
    Sub<Bits extends number>(arg0: BitVec<Bits, Name>, ...args: CoercibleToBitVec<Bits, Name>[]): BitVec<Bits, Name>;
    /** 
     * @category Operations 
     * 
     * Create the product of the Z3 expressions.
     * ```js
     * >>> a, b, c = Ints('a b c')
     * >>> Product(a, b, c)
     * a*b*c
     * ```
     */
    Product(arg0: Arith<Name>, ...args: CoercibleToArith<Name>[]): Arith<Name>;
    Product<Bits extends number>(arg0: BitVec<Bits, Name>, ...args: CoercibleToBitVec<Bits, Name>[]): BitVec<Bits, Name>;
    Div(arg0: Arith<Name>, arg1: CoercibleToArith<Name>): Arith<Name>;
    Div<Bits extends number>(arg0: BitVec<Bits, Name>, arg1: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    BUDiv<Bits extends number>(arg0: BitVec<Bits, Name>, arg1: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    Neg(a: Arith<Name>): Arith<Name>;
    Neg<Bits extends number>(a: BitVec<Bits, Name>): BitVec<Bits, Name>;
    Mod(a: Arith<Name>, b: CoercibleToArith<Name>): Arith<Name>;
    Mod<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**  
     * Array read. 
     * 
     * @returns Z3 select array expression
     * @category Operations 
     */
    Select<DomainSort extends NonEmptySortArray<Name>, RangeSort extends Sort<Name> = Sort<Name>>(array: SMTArray<Name, DomainSort, RangeSort>, ...indices: CoercibleToArrayIndexType<Name, DomainSort>): SortToExprMap<RangeSort, Name>;
    /** 
     * 
     * Copy the array and write to it.
     * Value should be coercible to RangeSort.
     * 
     * @param indicesAndValue (idx0, idx1, ..., idxN, value)
     * @returns Z3 store array expression
     * @category Operations
     */
    Store<DomainSort extends NonEmptySortArray<Name>, RangeSort extends Sort<Name> = Sort<Name>>(array: SMTArray<Name, DomainSort, RangeSort>, ...indicesAndValue: [
        ...CoercibleToArrayIndexType<Name, DomainSort>,
        CoercibleToMap<SortToExprMap<RangeSort, Name>, Name>
    ]): SMTArray<Name, DomainSort, RangeSort>;
    /** @category Operations 
     * 
     * @see Z3.Array.extract
    */
    Extract<Bits extends number>(hi: number, lo: number, val: BitVec<Bits, Name>): BitVec<number, Name>;
    /** @category Operations */
    ast_from_string(s: string): Ast<Name>;
    /** @category Operations */
    substitute(t: Expr<Name>, ...substitutions: [Expr<Name>, Expr<Name>][]): Expr<Name>;
    /**
     * Simplify the expression `a` using the given options.
     * 
     * This function has many options. Use `help_simplify` to obtain the complete list.
     * 
     * ---
     * 
     * ```js
     * >>> x = Int('x')
     * >>> y = Int('y')
     * >>> simplify(x + 1 + y + x + 1)
     * 2 + 2*x + y
     * >>> simplify((x + 1)*(y + 1), som=True)
     * 1 + x + y + x*y
     * >>> simplify(Distinct(x, y, 1), blast_distinct=True)
     * And(Not(x == y), Not(x == 1), Not(y == 1))
     * >>> simplify(And(x == 0, y == 1), elim_and=True)
     * Not(Or(Not(x == 0), Not(y == 1)))
     * ```
     */
    simplify(expr: Expr<Name>): Promise<Expr<Name>>;
}
export interface Ast<Name extends string = 'main', Ptr = unknown> {
    /** @hidden */
    readonly __typename: 'Ast' | Sort['__typename'] | FuncDecl['__typename'] | Expr['__typename'];
    readonly ctx: Context<Name>;
    /** @hidden */
    readonly ptr: Ptr;
    /** @virtual */
    get ast(): Z3_ast;
    /** @virtual */
    id(): number;
    eqIdentity(other: Ast<Name>): boolean;
    neqIdentity(other: Ast<Name>): boolean;
    sexpr(): string;
    hash(): number;
}
/** @hidden */
export interface SolverCtor<Name extends string> {
    new (): Solver<Name>;
}
/** 
 * Solver API provides methods for implementing the main SMT 2.0 commands:
 * push, pop, check, get-model, etc.
 * 
 * https://z3prover.github.io/api/html/z3.z3.html#Solver 
 */
export interface Solver<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'Solver';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_solver;
    set(key: string, value: any): void;
    /**
     * Create a backtracking point.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-push
     * ---
     *  
     * ```js
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0)
     * >>> s
     * [x > 0]
     * >>> s.push()
     * >>> s.add(x < 1)
     * >>> s
     * [x > 0, x < 1]
     * >>> s.check()
     * unsat
     * >>> s.pop()
     * >>> s.check()
     * sat
     * >>> s
     * [x > 0]
     * ```
     */
    push(): void;
    /**
     * Backtrack `num` backtracking points.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-pop
     * ---
     * 
     *```js
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0)
     * >>> s
     * [x > 0]
     * >>> s.push()
     * >>> s.add(x < 1)
     * >>> s
     * [x > 0, x < 1]
     * >>> s.check()
     * unsat
     * >>> s.pop()
     * >>> s.check()
     * sat
     * >>> s
     * [x > 0]
     * ```
     */
    pop(num?: number): void;
    numScopes(): number;
    /** Remove all asserted constraints and backtracking points created using `push()`. */
    reset(): void;
    /**
     * Assert constraints into the solver.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-add
     * 
     * ```js
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0, x < 2)
     * >>> s
     * [x > 0, x < 2]
     * ```
     */
    add(...exprs: (Bool<Name> | AstVector<Name, Bool<Name>>)[]): void;
    /**
     * Assert constraint `a` and track it in the unsat core using the Boolean constant `p`.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-assert_and_track
     * ---
     * 
     * ```js
     * If `p` is a string, it will be automatically converted into a Boolean constant.
     * 
     * >>> x = Int('x')
     * >>> p3 = Bool('p3')
     * >>> s = Solver()
     * >>> s.set(unsat_core=True)
     * >>> s.assert_and_track(x > 0,  'p1')
     * >>> s.assert_and_track(x != 1, 'p2')
     * >>> s.assert_and_track(x < 0,  p3)
     * >>> print(s.check())
     * unsat
     * >>> c = s.unsat_core()
     * >>> len(c)
     * 2
     * >>> Bool('p1') in c
     * True
     * >>> Bool('p2') in c
     * False
     * >>> p3 in c
     * True
     * ```
     */
    addAndTrack(expr: Bool<Name>, constant: Bool<Name> | string): void;
    /**
     * Return an AST vector containing all added constraints.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-assertions
     *  
     * ```js
     * >>> s = Solver()
     * >>> s.assertions()
     * []
     * >>> a = Int('a')
     * >>> s.add(a > 0)
     * >>> s.add(a < 10)
     * >>> s.assertions()
     * [a > 0, a < 10]
     * ```
     */
    assertions(): AstVector<Name, Bool<Name>>;
    /*** Parse assertions from a string */
    fromString(s: string): void;
    /**
     * Check whether the assertions in the given solver plus the optional assumptions are consistent or not.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-check
     * ---
     * 
     * ```js
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.check()
     * sat
     * >>> s.add(x > 0, x < 2)
     * >>> s.check()
     * sat
     * >>> s.model().eval(x)
     * 1
     * >>> s.add(x < 1)
     * >>> s.check()
     * unsat
     * >>> s.reset()
     * >>> s.add(2**x == 4)
     * >>> s.check()
     * unknown
     * ```
     */
    check(...exprs: (Bool<Name> | AstVector<Name, Bool<Name>>)[]): Promise<CheckSatResult>;
    /**
     * Return a model for the last `check()`.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-model
     * ---
     * 
     * ```js
     * This function raises an exception if
     * a model is not available (e.g., last `check()` returned unsat).
     * 
     * >>> s = Solver()
     * >>> a = Int('a')
     * >>> s.add(a + 2 == 0)
     * >>> s.check()
     * sat
     * >>> s.model()
     * [a = -2]
     * ```
     */
    model(): Model<Name>;
}

/**
 * Optimize API provides methods for solving using objective functions and weighted soft constraints
 * 
 * https://z3prover.github.io/api/html/z3.z3.html#Optimize
 */
export interface Optimize<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'Optimize';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_optimize;
    set(key: string, value: any): void;
    /** See Solver.push() */
    push(): void;
    /** See Solver.pop() */
    pop(num?: number): void;
    add(...exprs: (Bool<Name> | AstVector<Name, Bool<Name>>)[]): void;
    addSoft(expr: Bool<Name>, weight: number | bigint | string | CoercibleRational, id?: number | string): void;
    addAndTrack(expr: Bool<Name>, constant: Bool<Name> | string): void;
    /** See Solver.assertions() */
    assertions(): AstVector<Name, Bool<Name>>;
    fromString(s: string): void;
    maximize(expr: Arith<Name>): void;
    minimize(expr: Arith<Name>): void;
    /** See Solver.check() */
    check(...exprs: (Bool<Name> | AstVector<Name, Bool<Name>>)[]): Promise<CheckSatResult>;
    /** See Solver.model() */
    model(): Model<Name>;
}
/** @hidden */
export interface ModelCtor<Name extends string> {
    new (): Model<Name>;
}

/**
 * Model/Solution of a satisfiability problem (aka system of constraints).
 * 
 * - https://z3prover.github.io/api/html/z3.z3.html#ModelRef
 */
export interface Model<Name extends string = 'main'> extends Iterable<FuncDecl<Name>> {
    /** @hidden */
    readonly __typename: 'Model';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_model;
    /**
     * Return the number of constant and function declarations in the model `self`.
     * 
     * ```js
     * >>> f = Function('f', IntSort(), IntSort())
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0, f(x) != x)
     * >>> s.check()
     * sat
     * >>> m = s.model()
     * >>> len(m)
     * 2
     * ```
     */
    length(): number;
    entries(): IterableIterator<[number, FuncDecl<Name>]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<FuncDecl<Name>>;
    /**
     * Return a list with all symbols that have an interpretation in the model `self`.
     * 
     * ```js
     * >>> f = Function('f', IntSort(), IntSort())
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0, x < 2, f(x) == 0)
     * >>> s.check()
     * sat
     * >>> m = s.model()
     * >>> m.decls()
     * [x, f]
     * ```
     */
    decls(): FuncDecl<Name>[];
    /** Return a textual representation of the s-expression representing the model. */
    sexpr(): string;
    /**
     * Evaluate the expression `t` in the model `self`.
     * 
     * If `model_completion` is enabled, then a default interpretation is automatically added
     * for symbols that do not have an interpretation in the model `self`.
     * 
     * ```js
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0, x < 2)
     * >>> s.check()
     * sat
     * >>> m = s.model()
     * >>> m.eval(x + 1)
     * 2
     * >>> m.eval(x == 1)
     * True
     * >>> y = Int('y')
     * >>> m.eval(y + x)
     * 1 + y
     * >>> m.eval(y)
     * y
     * >>> m.eval(y, model_completion=True)
     * 0
     * >>> # Now, m contains an interpretation for y
     * >>> m.eval(y + x)
     * 1
     * ```
     */
    eval(expr: Bool<Name>, modelCompletion?: boolean): Bool<Name>;
    eval(expr: Arith<Name>, modelCompletion?: boolean): Arith<Name>;
    eval<Bits extends number = number>(expr: BitVec<Bits, Name>, modelCompletion?: boolean): BitVecNum<Bits, Name>;
    eval(expr: Expr<Name>, modelCompletion?: boolean): Expr<Name>;
    /**
     * If `idx` is an integer, then the declaration at position `idx` in the model `self` is returned.
     * 
     * If `idx` is a declaration, then the actual interpretation is returned.
     * 
     * The elements can be retrieved using position or the actual declaration.
     * ---
     * 
     * ```js
     * >>> f = Function('f', IntSort(), IntSort())
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0, x < 2, f(x) == 0)
     * >>> s.check()
     * sat
     * >>> m = s.model()
     * >>> len(m)
     * 2
     * >>> m[0]
     * x
     * >>> m[1]
     * f
     * >>> m[x]
     * 1
     * >>> m[f]
     * [else -> 0]
     * >>> for d in m: print("%s -> %s" % (d, m[d]))
     * x -> 1
     * f -> [else -> 0]
     * ```
    */
    get(i: number): FuncDecl<Name>;
    get(from: number, to: number): FuncDecl<Name>[];
    get(declaration: FuncDecl<Name>): FuncInterp<Name> | Expr<Name>;
    get(constant: Expr<Name>): Expr<Name>;
    get(sort: Sort<Name>): AstVector<Name, AnyExpr<Name>>;
    /** Update the interpretation of a constant */
    updateValue(decl: FuncDecl<Name> | Expr<Name>, a: Ast<Name> | FuncInterp<Name>): void;
    addFuncInterp<DomainSort extends Sort<Name>[] = Sort<Name>[], RangeSort extends Sort<Name> = Sort<Name>>(decl: FuncDecl<Name, DomainSort, RangeSort>, defaultValue: CoercibleToMap<SortToExprMap<RangeSort, Name>, Name>): FuncInterp<Name>;
}
/**
 * Part of {@link Context}. Used to declare uninterpreted sorts
 *
 * ```typescript
 * const A = context.Sort.declare('A');
 * const a = context.Const('a', A);
 * const b = context.const('b', A);
 *
 * a.sort.eqIdentity(A)
 * // true
 * b.sort.eqIdentity(A)
 * // true
 * a.eq(b)
 * // a == b
 * ```
 */
export interface SortCreation<Name extends string> {
    declare(name: string): Sort<Name>;
}
export interface Sort<Name extends string = 'main'> extends Ast<Name, Z3_sort> {
    /** @hidden */
    readonly __typename: 'Sort' | BoolSort['__typename'] | ArithSort['__typename'] | BitVecSort['__typename'] | SMTArraySort['__typename'];
    kind(): Z3_sort_kind;
    /** @virtual */
    subsort(other: Sort<Name>): boolean;
    /** @virtual */
    cast(expr: CoercibleToExpr<Name>): Expr<Name>;
    name(): string | number;
}
/**
 * @category Functions
 */
export interface FuncEntry<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'FuncEntry';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_func_entry;
    numArgs(): number;
    argValue(i: number): Expr<Name>;
    value(): Expr<Name>;
}
/**
 * @category Functions
 */
export interface FuncInterp<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'FuncInterp';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_func_interp;
    elseValue(): Expr<Name>;
    numEntries(): number;
    arity(): number;
    entry(i: number): FuncEntry<Name>;
    addEntry(args: Expr<Name>[], value: Expr<Name>): void;
}
/** @hidden */
export declare type FuncDeclSignature<Name extends string> = [Sort<Name>, Sort<Name>, ...Sort<Name>[]];
/**
 * Part of {@link Context}. Used to declare functions
 * @category Functions
 */
export interface FuncDeclCreation<Name extends string> {
    /**
     * Declare a new function
     * 
     * @param name Name of the function
     * @param signature The domains, and last parameter - the range of the function
     *
     * ```typescript
     * const f = ctx.Function.declare('f', ctx.Bool.sort(), ctx.Real.sort(), ctx.Int.sort())
     *
     * f.call(true, "1/3").eq(5)
     * // f(true, 1/3) == 5
     * ```
     */
    declare<DomainSort extends Sort<Name>[], RangeSort extends Sort<Name>>(name: string, ...signature: [...DomainSort, RangeSort]): FuncDecl<Name, DomainSort, RangeSort>;
    fresh<DomainSort extends Sort<Name>[], RangeSort extends Sort<Name>>(...signature: [...DomainSort, RangeSort]): FuncDecl<Name, DomainSort, RangeSort>;
}
/**
 * @category Functions
 */
export interface RecFuncCreation<Name extends string> {
    declare(name: string, ...signature: FuncDeclSignature<Name>): FuncDecl<Name>;
    addDefinition(f: FuncDecl<Name>, args: Expr<Name>[], body: Expr<Name>): void;
}
/**
 * @category Functions
 */
export interface FuncDecl<Name extends string = 'main', DomainSort extends Sort<Name>[] = Sort<Name>[], RangeSort extends Sort<Name> = Sort<Name>> extends Ast<Name, Z3_func_decl> {
    /** @hidden */
    readonly __typename: 'FuncDecl';
    name(): string | number;
    arity(): number;
    domain<T extends number>(i: T): DomainSort[T];
    range(): RangeSort;
    kind(): Z3_decl_kind;
    params(): (number | string | Sort<Name> | Expr<Name> | FuncDecl<Name>)[];
    call(...args: CoercibleToArrayIndexType<Name, DomainSort>): SortToExprMap<RangeSort, Name>;
}
export interface Expr<Name extends string = 'main', S extends Sort<Name> = AnySort<Name>, Ptr = unknown> extends Ast<Name, Ptr> {
    /** @hidden */
    readonly __typename: 'Expr' | Bool['__typename'] | Arith['__typename'] | BitVec['__typename'] | SMTArray['__typename'];
    get sort(): S;
    eq(other: CoercibleToExpr<Name>): Bool<Name>;
    neq(other: CoercibleToExpr<Name>): Bool<Name>;
    params(): ReturnType<FuncDecl<Name>['params']>;
    name(): ReturnType<FuncDecl<Name>['name']>;
    decl(): FuncDecl<Name>;
    numArgs(): number;
    arg(i: number): AnyExpr<Name>;
    children(): AnyExpr<Name>[];
}
/** @category Booleans */
export interface BoolSort<Name extends string = 'main'> extends Sort<Name> {
    /** @hidden */
    readonly __typename: 'BoolSort';
    cast(expr: Bool<Name> | boolean): Bool<Name>;
    cast(expr: CoercibleToExpr<Name>): never;
}
/** @category Booleans */
export interface BoolCreation<Name extends string = 'main'> {
    sort(): BoolSort<Name>;
    const(name: string): Bool<Name>;
    consts(names: string | string[]): Bool<Name>[];
    vector(prefix: string, count: number): Bool<Name>[];
    fresh(prefix?: string): Bool<Name>;
    val(value: boolean): Bool<Name>;
}
/** @category Booleans */
export interface Bool<Name extends string = 'main'> extends Expr<Name, BoolSort<Name>, Z3_ast> {
    /** @hidden */
    readonly __typename: 'Bool' | 'NonLambdaQuantifier';
    not(): Bool<Name>;
    and(other: Bool<Name> | boolean): Bool<Name>;
    or(other: Bool<Name> | boolean): Bool<Name>;
    xor(other: Bool<Name> | boolean): Bool<Name>;
    implies(other: Bool<Name> | boolean): Bool<Name>;
}
/** @category Quantifiers */
export interface Pattern<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'Pattern';
}
/**
 * A Sort that represents Integers or Real numbers
 * @category Arithmetic
 */
export interface ArithSort<Name extends string = 'main'> extends Sort<Name> {
    /** @hidden */
    readonly __typename: 'ArithSort';
    cast(other: bigint | number | string): IntNum<Name> | RatNum<Name>;
    cast(other: CoercibleRational | RatNum<Name>): RatNum<Name>;
    cast(other: IntNum<Name>): IntNum<Name>;
    cast(other: bigint | number | string | Bool<Name> | Arith<Name> | CoercibleRational): Arith<Name>;
    cast(other: CoercibleToExpr<Name> | string): never;
}
/** @category Arithmetic */
export interface IntCreation<Name extends string> {
    sort(): ArithSort<Name>;
    const(name: string): Arith<Name>;
    consts(names: string | string[]): Arith<Name>[];
    vector(prefix: string, count: number): Arith<Name>[];
    fresh(prefix?: string): Arith<Name>;
    val(value: bigint | number | string): IntNum<Name>;
}
/** @category Arithmetic */
export interface RealCreation<Name extends string> {
    sort(): ArithSort<Name>;
    const(name: string): Arith<Name>;
    consts(names: string | string[]): Arith<Name>[];
    vector(prefix: string, count: number): Arith<Name>[];
    fresh(prefix?: string): Arith<Name>;
    val(value: number | string | bigint | CoercibleRational): RatNum<Name>;
}
/**
 * Represents Integer or Real number expression
 * @category Arithmetic
 */
export interface Arith<Name extends string = 'main'> extends Expr<Name, ArithSort<Name>, Z3_ast> {
    /** @hidden */
    readonly __typename: 'Arith' | IntNum['__typename'] | RatNum['__typename'];
    /**
     * Adds two numbers together
     */
    add(other: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Multiplies two numbers together
     */
    mul(other: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Subtract second number from the first one
     */
    sub(other: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Applies power to the number
     *
     * ```typescript
     * const x = Int.const('x');
     *
     * await solve(x.pow(2).eq(4), x.lt(0)); // x**2 == 4, x < 0
     * // x=-2
     * ```
     */
    pow(exponent: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Divides the number by the second one
     */
    div(other: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Returns a number modulo second one
     *
     * ```typescript
     * const x = Int.const('x');
     *
     * await solve(x.mod(7).eq(1), x.gt(7)) // x % 7 == 1, x > 7
     * // x=8
     * ```
     */
    mod(other: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Returns a negation of the number
     */
    neg(): Arith<Name>;
    /**
     * Return whether the number is less or equal than the second one (`<=`)
     */
    le(other: CoercibleToArith<Name>): Bool<Name>;
    /**
     * Returns whether the number is less than the second one (`<`)
     */
    lt(other: CoercibleToArith<Name>): Bool<Name>;
    /**
     * Returns whether the number is greater than the second one (`>`)
     */
    gt(other: CoercibleToArith<Name>): Bool<Name>;
    /**
     * Returns whether the number is greater or equal than the second one (`>=`)
     */
    ge(other: CoercibleToArith<Name>): Bool<Name>;
}
/**
 * A constant Integer value expression
 * @category Arithmetic
 */
export interface IntNum<Name extends string = 'main'> extends Arith<Name> {
    /** @hidden */
    readonly __typename: 'IntNum';
    value(): bigint;
    asString(): string;
    asBinary(): string;
}
/**
 * A constant Rational value expression
 *
 * ```typescript
 * const num = Real.val('1/3');
 *
 * num.asString()
 * // '1/3'
 * num.value
 * // { numerator: 1n, denominator: 3n }
 * num.asNumber()
 * // 0.3333333333333333
 * ```
 * @category Arithmetic
 */
export interface RatNum<Name extends string = 'main'> extends Arith<Name> {
    /** @hidden */
    readonly __typename: 'RatNum';
    value(): {
        numerator: bigint;
        denominator: bigint;
    };
    numerator(): IntNum<Name>;
    denominator(): IntNum<Name>;
    asNumber(): number;
    asDecimal(prec?: number): string;
    asString(): string;
}
/**
 * A Sort representing Bit Vector numbers of specified {@link BitVecSort.size size}
 *
 * @typeParam Bits - A number representing amount of bits for this sort
 * @category Bit Vectors
 */
export interface BitVecSort<Bits extends number = number, Name extends string = 'main'> extends Sort<Name> {
    /** @hidden */
    readonly __typename: 'BitVecSort';
    /**
     * The amount of bits inside the sort
     *
     * ```typescript
     * const x = BitVec.const('x', 32);
     *
     * console.log(x.sort.size)
     * // 32
     * ```
     */
    size(): Bits;
    cast(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    cast(other: CoercibleToExpr<Name>): Expr<Name>;
}
/** @category Bit Vectors */
export interface BitVecCreation<Name extends string> {
    sort<Bits extends number = number>(bits: Bits): BitVecSort<Bits, Name>;
    const<Bits extends number = number>(name: string, bits: Bits | BitVecSort<Bits, Name>): BitVec<Bits, Name>;
    consts<Bits extends number = number>(names: string | string[], bits: Bits | BitVecSort<Bits, Name>): BitVec<Bits, Name>[];
    val<Bits extends number = number>(value: bigint | number | boolean, bits: Bits | BitVecSort<Bits, Name>): BitVecNum<Bits, Name>;
}
/**
 * Represents Bit Vector expression
 * @category Bit Vectors
 */
export interface BitVec<Bits extends number = number, Name extends string = 'main'> extends Expr<Name, BitVecSort<Bits, Name>, Z3_ast> {
    /** @hidden */
    readonly __typename: 'BitVec' | BitVecNum['__typename'];
    /**
     * The amount of bits of this BitVectors sort
     *
     * ```typescript
     * const x = BitVec.const('x', 32);
     *
     * x.size
     * // 32
     *
     * const Y = BitVec.sort(8);
     * const y = BitVec.const('y', Y);
     *
     * y.size
     * // 8
     * ```
     */
    size(): Bits;
    /** @category Arithmetic */
    add(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** @category Arithmetic */
    mul(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** @category Arithmetic */
    sub(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** 
     * @category Arithmetic 
     * 
     * Create the Z3 expression (signed) division `self / other`.
     */
    sdiv(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** 
     * @category Arithmetic 
     * 
     * Create the Z3 expression (unsigned) division `self / other`.
     */
    udiv(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** @category Arithmetic 
     * 
     * Create the Z3 expression (signed) modulo (Euclidean division) `self MOD other`.
     * 
     * - https://stackoverflow.com/questions/42138499/understanding-z3-bvsmod-behavior-with-ssa
     * - https://stackoverflow.com/questions/13683563/whats-the-difference-between-mod-and-remainder
    */
    smod(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** @category Arithmetic 
     * 
     * Create the Z3 expression (unsigned) remainder `self % other`.
     * 
     * https://stackoverflow.com/questions/13683563/whats-the-difference-between-mod-and-remainder
     */
    urem(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** @category Arithmetic 
     * 
     * Create the Z3 expression (signed) remainder `self % other`.
     * 
     * https://stackoverflow.com/questions/13683563/whats-the-difference-between-mod-and-remainder
     */
    srem(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** @category Arithmetic */
    neg(): BitVec<Bits, Name>;
    /**
     * Creates a bitwise-or between two bitvectors
     * @category4 Bitwise
     */
    or(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a bitwise-and between two bitvectors
     * @category Bitwise
     */
    and(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a bitwise-not-and between two bitvectors
     * @category Bitwise
     */
    nand(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a bitwise-exclusive-or between two bitvectors
     * @category Bitwise
     */
    xor(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a bitwise-exclusive-not-or between two bitvectors
     * @category Bitwise
     */
    xnor(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates an arithmetic shift right operation
     * @category Bitwise
     */
    shr(count: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a logical shift right operation
     * @category Bitwise
     */
    lshr(count: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a shift left operation
     * @category Bitwise
     */
    shl(count: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a rotate right operation
     * @category Bitwise
     */
    rotateRight(count: CoercibleToBitVec<number, Name>): BitVec<Bits, Name>;
    /**
     * Creates a rotate left operation
     * @category Bitwise
     */
    rotateLeft(count: CoercibleToBitVec<number, Name>): BitVec<Bits, Name>;
    /**
     * Creates a bitwise not operation
     * @category Bitwise
     */
    not(): BitVec<Bits, Name>;
    /**
     * Creates an extraction operation.
     * Bits are indexed starting from 0 for the most right one (least significant) increasing to left (most significant)
     *
     * ```typescript
     * const x = BitVec.const('x', 8);
     *
     * x.extract(6, 2)
     * // Extract(6, 2, x)
     * x.extract(6, 2).sort
     * // BitVec(5)
     * ```
     * @param high The most significant bit to be extracted
     * @param low  The least significant bit to be extracted
     */
    extract(high: number, low: number): BitVec<number, Name>;
    /**
     * Extend the size by `count`.
     * Return a bit-vector expression with `n` extra leading sign-bits.
     * 
     * - **E.g.** from 8-bit to 32-bit using `.signExt(24)`. 
     * - **E.g2.** 4bit number `0b1000` has sign bit `1`, so `.signExt(2)` returns `0b111000`.
     * 
     * ```
     * >>> x = BitVec('x', 16)
     * >>> n = SignExt(8, x)
     * >>> n.size()
     * 24
     * >>> n
     * SignExt(8, x)
     * >>> n.sort()
     * BitVec(24)
     * >>> v0 = BitVecVal(2, 2)
     * >>> v0
     * 2
     * >>> v0.size()
     * 2
     * >>> v  = simplify(SignExt(6, v0))
     * >>> v
     * 254
     * >>> v.size()
     * 8
     * ```
     */
    signExt(count: number): BitVec<number, Name>;
    /**
     * Extend the size by `count`. 
     * Return a bit-vector expression with `n` extra leading zero-bits.
     * 
     * - **E.g.** from 8-bit to 32-bit using `.zeroExt(24)`.
     * - **E.g2.** 4bit number `0b1000` after .`zeroExt(2)` returns `0b001000`.
     *       It's same as original 4-bit number, but this time in 6-bit.
     * 
     * ```
     * >>> x = BitVec('x', 16)
     * >>> n = ZeroExt(8, x)
     * >>> n.size()
     * 24
     * >>> n
     * ZeroExt(8, x)
     * >>> n.sort()
     * BitVec(24)
     * >>> v0 = BitVecVal(2, 2)
     * >>> v0
     * 2
     * >>> v0.size()
     * 2
     * >>> v  = simplify(ZeroExt(6, v0))
     * >>> v
     * 2
     * >>> v.size()
     * 8
     * ```
     */
    zeroExt(count: number): BitVec<number, Name>;
    /** Return an expression representing `count` copies. */
    repeat(count: number): BitVec<number, Name>;
    /**
     * Creates a signed less-or-equal operation (`<=`)
     * @category Comparison
     */
    sle(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates an unsigned less-or-equal operation (`<=`)
     * @category Comparison
     */
    ule(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates a signed less-than operation (`<`)
     * @category Comparison
     */
    slt(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates an unsigned less-than operation (`<`)
     * @category Comparison
     */
    ult(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates a signed greater-or-equal operation (`>=`)
     * @category Comparison
     */
    sge(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates an unsigned greater-or-equal operation (`>=`)
     * @category Comparison
     */
    uge(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates a signed greater-than operation (`>`)
     * @category Comparison
     */
    sgt(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates an unsigned greater-than operation (`>`)
     * @category Comparison
     */
    ugt(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates a reduction-and operation
     */
    redAnd(): BitVec<number, Name>;
    /**
     * Creates a reduction-or operation
     */
    redOr(): BitVec<number, Name>;
    /** 
     * @category Boolean
     * A predicate the determines that bit-vector addition does not overflow
     */
    addNoOverflow(other: CoercibleToBitVec<Bits, Name>, isSigned: boolean): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that signed bit-vector addition does not underflow
    */
    addNoUnderflow(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that bit-vector subtraction does not overflow
     */
    subNoOverflow(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that bit-vector subtraction does not underflow
     * 
     * This fn has a typo.
     */
    subNoUndeflow(other: CoercibleToBitVec<Bits, Name>, isSigned: boolean): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that bit-vector signed division does not overflow
     */
    sdivNoOverflow(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that bit-vector multiplication does not overflow
     */
    mulNoOverflow(other: CoercibleToBitVec<Bits, Name>, isSigned: boolean): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that bit-vector signed multiplication does not underflow.
     * 
     * This fn has a typo.
     */
    mulNoUndeflow(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that bit-vector unary negation does not overflow
     */
    negNoOverflow(): Bool<Name>;
}
/**
 * Represents Bit Vector constant value
 * @category Bit Vectors
 */
export interface BitVecNum<Bits extends number = number, Name extends string = 'main'> extends BitVec<Bits, Name> {
    /** @hidden */
    readonly __typename: 'BitVecNum';
    value(): bigint;
    asSignedValue(): bigint;
    asString(): string;
    asBinaryString(): string;
}
/**
 * A Sort representing a SMT Array with range of sort {@link SMTArraySort.range range}
 * and a domain of sort {@link SMTArraySort.domain domain}
 *
 * @typeParam DomainSort The sort of the domain of the array (provided as an array of sorts)
 * @typeParam RangeSort The sort of the array range
 * @category Arrays
 */
export interface SMTArraySort<Name extends string = 'main', DomainSort extends NonEmptySortArray<Name> = [Sort<Name>, ...Sort<Name>[]], RangeSort extends AnySort<Name> = AnySort<Name>> extends Sort<Name> {
    /** @hidden */
    readonly __typename: 'ArraySort';
    /**
     * The sort of the first dimension of the domain
     */
    domain(): DomainSort[0];
    /**
     * The sort of the i-th (0-indexed) dimension of the domain
     *
     * @param i index of the dimension of the domain being requested
     */
    domain_n<T extends number>(i: T): DomainSort[T];
    /**
     * The sort of the range
     */
    range(): RangeSort;
}
/** @category Arrays */
export interface SMTArrayCreation<Name extends string> {
    sort<DomainSort extends NonEmptySortArray<Name>, RangeSort extends Sort<Name>>(...sig: [...DomainSort, RangeSort]): SMTArraySort<Name, DomainSort, RangeSort>;
    const<DomainSort extends NonEmptySortArray<Name>, RangeSort extends Sort<Name>>(name: string, ...sig: [...DomainSort, RangeSort]): SMTArray<Name, DomainSort, RangeSort>;
    consts<DomainSort extends NonEmptySortArray<Name>, RangeSort extends Sort<Name>>(names: string | string[], ...sig: [...DomainSort, RangeSort]): SMTArray<Name, DomainSort, RangeSort>[];
    K<DomainSort extends AnySort<Name>, RangeSort extends AnySort<Name>>(domain: DomainSort, value: SortToExprMap<RangeSort, Name>): SMTArray<Name, [DomainSort], RangeSort>;
}
export declare type NonEmptySortArray<Name extends string = 'main'> = [Sort<Name>, ...Array<Sort<Name>>];
export declare type ArrayIndexType<Name extends string, DomainSort extends Sort<Name>[]> = [
    ...{
        [Key in keyof DomainSort]: DomainSort[Key] extends AnySort<Name> ? SortToExprMap<DomainSort[Key], Name> : DomainSort[Key];
    }
];
export declare type CoercibleToArrayIndexType<Name extends string, DomainSort extends Sort<Name>[]> = [
    ...{
        [Key in keyof DomainSort]: DomainSort[Key] extends AnySort<Name> ? CoercibleToMap<SortToExprMap<DomainSort[Key], Name>, Name> : DomainSort[Key];
    }
];
/**
 * Represents Array expression
 *
 * @typeParam DomainSort The sort of the domain of the array (provided as an array of sorts)
 * @typeParam RangeSort The sort of the array range
 * @category Arrays
 */
export interface SMTArray<Name extends string = 'main', DomainSort extends NonEmptySortArray<Name> = [Sort<Name>, ...Sort<Name>[]], RangeSort extends Sort<Name> = Sort<Name>> extends Expr<Name, SMTArraySort<Name, DomainSort, RangeSort>, Z3_ast> {
    /** @hidden */
    readonly __typename: 'Array' | 'Lambda';
    domain(): DomainSort[0];
    domain_n<T extends number>(i: T): DomainSort[T];
    range(): RangeSort;
    /** 
     * Array read. 
     * 
     * @returns Z3 select array expression
     */
    select(...indices: CoercibleToArrayIndexType<Name, DomainSort>): SortToExprMap<RangeSort, Name>;
    /**
     * 
     * Copy the array and write to it.
     * Value should be coercible to RangeSort
     * 
     * @param indicesAndValue (idx0, idx1, ..., idxN, value)
     * @returns Z3 store array expression
     */
    store(...indicesAndValue: [
        ...CoercibleToArrayIndexType<Name, DomainSort>,
        CoercibleToMap<SortToExprMap<RangeSort, Name>, Name>
    ]): SMTArray<Name, DomainSort, RangeSort>;
}
/**
 * Defines the expression type of the body of a quantifier expression
 *
 * @category Quantifiers
 */
export declare type BodyT<Name extends string = 'main', QVarSorts extends NonEmptySortArray<Name> = [Sort<Name>, ...Sort<Name>[]], QSort extends BoolSort<Name> | SMTArraySort<Name, QVarSorts> = BoolSort<Name> | SMTArraySort<Name, QVarSorts>> = QSort extends BoolSort<Name> ? Bool<Name> : QSort extends SMTArray<Name, QVarSorts, infer RangeSort> ? SortToExprMap<RangeSort, Name> : never;
/** @category Quantifiers */
export interface Quantifier<Name extends string = 'main', QVarSorts extends NonEmptySortArray<Name> = [Sort<Name>, ...Sort<Name>[]], QSort extends BoolSort<Name> | SMTArraySort<Name, QVarSorts> = BoolSort<Name> | SMTArraySort<Name, QVarSorts>> extends Expr<Name, QSort> {
    readonly __typename: 'NonLambdaQuantifier' | 'Lambda';
    is_forall(): boolean;
    is_exists(): boolean;
    is_lambda(): boolean;
    weight(): number;
    num_patterns(): number;
    pattern(i: number): Pattern<Name>;
    num_no_patterns(): number;
    no_pattern(i: number): Expr<Name>;
    body(): BodyT<Name, QVarSorts, QSort>;
    num_vars(): number;
    var_name(i: number): string | number;
    var_sort<T extends number>(i: T): QVarSorts[T];
    children(): [BodyT<Name, QVarSorts, QSort>];
}
export interface Probe<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'Probe';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_probe;
}
/** @hidden */
export interface TacticCtor<Name extends string> {
    new (name: string): Tactic<Name>;
}
export interface Tactic<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'Tactic';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_tactic;
}
/** @hidden */
export interface AstVectorCtor<Name extends string> {
    new <Item extends Ast<Name> = AnyAst<Name>>(): AstVector<Name, Item>;
}
/**
 * Stores multiple {@link Ast} objects
 *
 * ```typescript
 * const vector = new AstVector<Bool>();
 * vector.push(Bool.val(5));
 * vector.push(Bool.const('x'))
 *
 * vector.length
 * // 2
 * vector.get(1)
 * // x
 * [...vector.values()]
 * // [2, x]
 * ```
 */
export interface AstVector<Name extends string = 'main', Item extends Ast<Name> = AnyAst<Name>> extends Iterable<Item> {
    /** @hidden */
    readonly __typename: 'AstVector';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_ast_vector;
    length(): number;
    entries(): IterableIterator<[number, Item]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<Item>;
    get(i: number): Item;
    get(from: number, to: number): Item[];
    set(i: number, v: Item): void;
    push(v: Item): void;
    resize(size: number): void;
    has(v: Item): boolean;
    sexpr(): string;
}
/** @hidden */
export interface AstMapCtor<Name extends string> {
    new <Key extends Ast<Name> = AnyAst<Name>, Value extends Ast<Name> = AnyAst<Name>>(): AstMap<Name, Key, Value>;
}
/**
 * Stores a mapping between different {@link Ast} objects
 *
 * ```typescript
 * const map = new Map<Arith, Bool>();
 * const x = Int.const('x')
 * const y = Int.const('y')
 * map.set(x, Bool.val(true))
 * map.Set(y, Bool.val(false))
 *
 * map.size
 * // 2
 * map.has(x)
 * // true
 * [...map.entries()]
 * // [[x, true], [y, false]]
 * map.clear()
 * map.size
 * // 0
 * ```
 */
export interface AstMap<Name extends string = 'main', Key extends Ast<Name> = AnyAst<Name>, Value extends Ast<Name> = AnyAst<Name>> extends Iterable<[Key, Value]> {
    /** @hidden */
    readonly __typename: 'AstMap';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_ast_map;
    get size(): number;
    entries(): IterableIterator<[Key, Value]>;
    keys(): AstVector<Name, Key>;
    values(): IterableIterator<Value>;
    get(key: Key): Value | undefined;
    set(key: Key, value: Value): void;
    delete(key: Key): void;
    clear(): void;
    has(key: Key): boolean;
    sexpr(): string;
}
/**
 * @category Global
 */
export interface Z3HighLevel {
    enableTrace(tag: string): void;
    disableTrace(tag: string): void;
    getVersion(): {
        major: number;
        minor: number;
        build_number: number;
        revision_number: number;
    };
    getVersionString(): string;
    getFullVersion(): string;
    openLog(filename: string): boolean;
    appendLog(s: string): void;
    /**
     * Set a Z3 parameter
     *
     * ```typescript
     * setParam('pp.decimal', true);
     * ```
     */
    setParam(key: string, value: any): void;
    /**
     * Set multiple Z3 parameters at once
     *
     * ```typescript
     * setParam({
     *   'pp.decimal': true,
     *   'pp.decimal_precision': 20
     * });
     * ```
     */
    setParam(key: Record<string, any>): void;
    /**
     * Resets all Z3 parameters
     */
    resetParams(): void;
    /**
     * Returns a global Z3 parameter
     */
    getParam(name: string): string | null;
    /**
     * Use this to create new contexts
     * @see {@link Context}
     */
    readonly Context: ContextCtor;
}
