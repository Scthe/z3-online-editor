import { Z3_Wrapper } from './z3-api';
import { Monaco } from '../components/codeEditorPanel/types';

export const injectZ3IntoMonacoEditor = (z3: Z3_Wrapper, monaco: Monaco) => {
  const ts = monaco.languages.typescript.typescriptDefaults;
  const js = monaco.languages.typescript.javascriptDefaults;

  // add typings from external files
  z3.extraTypingExternalFiles.forEach((file) => {
    const moduleText = `declare module '${file.moduleName}' { ${file.content} }`;
    ts.addExtraLib(moduleText, file.moduleName);
    js.addExtraLib(moduleText, file.moduleName);
  });

  // add typings from my custom globally accessible stuff.
  // E.g. 'ctx' for z3's context, or popular keys from the z3's context
  const contextType = `import('z3').Context<"z3_ctx">`;
  const globalCtxKeys = z3.globallyAccessibleContextKeys.map(
    (name) => `declare const ${name}: ${contextType}['${name}'];`
  );
  ts.addExtraLib(
    `
    declare const ctx: ${contextType};
    ${globalCtxKeys.join('\n')}
    `
  );

  // mostly to get top-level await
  ts.setCompilerOptions({
    ...ts.getCompilerOptions(),
    module: 99, // ModuleKind.ESNext
    target: 99, // ScriptTarget.ESNext
  });
};
