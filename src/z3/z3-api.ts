import { Context, init, Z3HighLevel } from 'z3-solver/build/browser';
import { getPluckedContextKeys } from './z3-ctxPluck';
import { FULL_Z3_TYPINGS } from '../vfs-content/types';

// https://github.com/bakkot/z3-web-demo
// https://github.com/microsoft/z3guide/issues/43

export type IContextZ3 = Context<'main'>;

interface MyContextCtor {
  new (name: string, options?: Record<string, unknown>): IContextZ3;
}

type TypingsFile = {
  moduleName: string;
  content: string;
};

export interface Z3_Wrapper {
  z3: Z3HighLevel;
  ContextCtor: MyContextCtor;
  globallyAccessibleContextKeys: Array<keyof IContextZ3>;
  extraTypingExternalFiles: TypingsFile[];
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

    // https://microsoft.github.io/z3guide/programming/Parameters/
    z3.setParam('pp.decimal', 'true'); // print as values instead of sexpressions
    // z3.setParam('dump_models', 'true');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ContextCtor: MyContextCtor = z3.Context as any;
    const testCtx = await testApiWorks(ContextCtor);

    return {
      status: 'ok',
      z3: {
        z3,
        ContextCtor,
        globallyAccessibleContextKeys: getPluckedContextKeys(testCtx),
        extraTypingExternalFiles: [
          {
            moduleName: 'z3',
            content: FULL_Z3_TYPINGS,
          },
        ],
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
