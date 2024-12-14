import { IContextZ3, Z3_Wrapper } from './z3-api';

type EvalFn = (ctx: IContextZ3) => Promise<void>;

export const startEvalZ3Script = (z3: Z3_Wrapper, userScriptText: string) => {
  const globalCtxKeysStr = z3.globallyAccessibleContextKeys.join(',');
  const fnName = 'f';

  const scriptFnText = `const ${fnName} = async (ctx, log) => {
      let { ${globalCtxKeysStr} } = ctx;
      ${userScriptText}
    };
    ${fnName}`;

  // https://esbuild.github.io/content-types/#direct-eval
  const scriptFn: EvalFn = window.eval(scriptFnText);

  const ctx = new z3.ContextCtor('main');
  // const solver = new ctx.Solver();
  const resultAsync = scriptFn(ctx);
  // console.log(await solver.check());

  return { ctx, resultAsync };
};
