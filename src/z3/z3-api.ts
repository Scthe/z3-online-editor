import { Context, init, Z3HighLevel } from 'z3-solver/build/browser';
import { getPluckedContextKeys } from './z3-ctxPluck';
import { downloadTypingsZ3, ExtraTypingFiles } from './z3-monaco';

export type IContextZ3 = Context<'main'>;

interface MyContextCtor {
  new (name: string, options?: Record<string, unknown>): IContextZ3;
}

export interface Z3_Wrapper {
  z3: Z3HighLevel;
  ContextCtor: MyContextCtor;
  globallyAccessibleContextKeys: Array<keyof IContextZ3>;
  extraTypingExternalFiles: ExtraTypingFiles;
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
    const testCtx = await testApiWorks(ContextCtor);

    const extraTypingExternalFiles = await downloadTypingsZ3();

    return {
      status: 'ok',
      z3: {
        z3,
        ContextCtor,
        globallyAccessibleContextKeys: getPluckedContextKeys(testCtx),
        extraTypingExternalFiles,
      },
    };
  } catch (error) {
    console.error(error);
    return { status: 'error', error };
  }
}

async function testApiWorks(ContextCtor: MyContextCtor) {
  const ctx = new ContextCtor('z3-init-test');
  const { Solver, Int, And } = ctx;

  const x = Int.const('x');

  const solver = new Solver();
  solver.add(And(x.ge(0), x.le(9)));
  const _solution = await solver.check();
  // console.log(solution);

  return ctx;
}
