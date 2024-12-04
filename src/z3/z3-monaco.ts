import Editor from '@monaco-editor/react';
import React from 'react';

type EditorProps = React.ComponentProps<typeof Editor>;
type Monaco = Parameters<NonNullable<EditorProps['onMount']>>[1];

const MY_GLOBALS = `
declare const ctx: import('z3').Context<"main">;
`;

export const injectZ3IntoMonacoEditor = async (monaco: Monaco) => {
  const ts = monaco.languages.typescript.typescriptDefaults;

  const promises = ['z3-types/types.d.ts'].map(async (filePath) => {
    const resp = await fetch(filePath);
    const text = await resp.text();

    ts.addExtraLib(`declare module 'z3' { ${text} }`, 'z3');
  });

  await Promise.all(promises);

  // TODO can be put above?
  ts.addExtraLib(MY_GLOBALS);

  ts.setCompilerOptions({
    ...ts.getCompilerOptions(),
    module: 99, // ModuleKind.ESNext
    target: 99, // ScriptTarget.ESNext
  });
};
