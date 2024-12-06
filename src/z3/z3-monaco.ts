import Editor from '@monaco-editor/react';
import React from 'react';
import { Z3_Wrapper } from './z3-api';
import { typesafeObjectKeys } from '../utils';

// trust me, this is the easiest way to get typings for Monaco
type EditorProps = React.ComponentProps<typeof Editor>;
type EditorOnMountFn = NonNullable<EditorProps['onMount']>;
type Monaco = Parameters<EditorOnMountFn>[1];

const EXTRA_TYPINGS = {
  z3: 'z3-types/types.d.ts',
};

export type ExtraTypingFiles = Awaited<ReturnType<typeof downloadTypingsZ3>>;

export const downloadTypingsZ3 = async () => {
  const promises = typesafeObjectKeys(EXTRA_TYPINGS).map(async (moduleName) => {
    const resp = await fetch(EXTRA_TYPINGS[moduleName]);
    const content = await resp.text();
    return { moduleName, content };
  });

  return Promise.all(promises);
};

export const injectZ3IntoMonacoEditor = (z3: Z3_Wrapper, monaco: Monaco) => {
  const ts = monaco.languages.typescript.typescriptDefaults;

  // add typings from external files
  z3.extraTypingExternalFiles.forEach((file) => {
    ts.addExtraLib(
      `declare module '${file.moduleName}' { ${file.content} }`,
      file.moduleName
    );
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
