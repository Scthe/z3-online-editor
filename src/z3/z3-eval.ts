import { Z3_Wrapper } from './z3-api';

export type z3_Logger = (...args: unknown[]) => void;

export const evaluateUserZ3Script = async (
  z3: Z3_Wrapper,
  log: z3_Logger,
  userScriptText: string
) => {
  const globalCtxKeysStr = z3.globallyAccessibleContextKeys.join(',');

  const scriptFnText = `const f = async (ctx, log) => {
      // 'let' to allow user override, don't constraint the user
      let { ${globalCtxKeysStr} } = ctx;
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
