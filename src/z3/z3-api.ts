import { Context, init, Z3HighLevel } from 'z3-solver/build/browser';

interface MyContextCtor {
  new (name: string, options?: Record<string, unknown>): Context<'main'>;
}

export interface Z3_Wrapper {
  z3: Z3HighLevel;
  ContextCtor: MyContextCtor;
}

type InitReturnType =
  | { status: 'ok'; z3: Z3_Wrapper }
  | { status: 'error'; error: unknown };

export async function initZ3(): Promise<InitReturnType> {
  try {
    if (!crossOriginIsolated) {
      console.error(
        `Missing headers used to enable SharedArrayBuffer. Your document response should contain: "Cross-Origin-Opener-Policy: same-origin", and "Cross-Origin-Embedder-Policy: require-corp".`
      );
    }

    const z3 = await init();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ContextCtor: MyContextCtor = z3.Context as any;
    const ctx: Context = new ContextCtor('main');
    const { Solver, Int, And } = ctx;

    const x = Int.const('x');

    const solver = new Solver();
    solver.add(And(x.ge(0), x.le(9)));
    const _solution = await solver.check();
    // console.log(solution);

    return { status: 'ok', z3: { z3, ContextCtor } };
  } catch (error) {
    console.error(error);
    return { status: 'error', error };
  }
}

export type z3_Logger = (...args: unknown[]) => void;

export const evaluateUserZ3Script = async (
  z3: Z3_Wrapper,
  log: z3_Logger,
  userScriptText: string
) => {
  const scriptFnText = `const f = async (ctx, log) => {
    // const { Solver, Int, And } = ctx;
    ${userScriptText}
    };
    f`;

  // https://esbuild.github.io/content-types/#direct-eval
  const scriptFn = window.eval(scriptFnText);

  const ctx = new z3.ContextCtor('main');
  // const solver = new ctx.Solver();
  scriptFn(ctx, log);
  // console.log(await solver.check());
};
