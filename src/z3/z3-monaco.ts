// import {monaco} from'@monaco-editor/react';
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import Editor from '@monaco-editor/react';
import React from 'react';

type EditorProps = React.ComponentProps<typeof Editor>;
type Monaco = Parameters<NonNullable<EditorProps['onMount']>>[1];

const MY_GLOBALS = `
// import type {Context, CoercibleRational} from 'z3';
// type User = import('./user').User;

/// <reference types="z3" />
// / <reference path="./z3.d.ts" />

declare function myLib(a: string): string;
declare function myLib2(): CoercibleRational;
declare function myLib3(): z3.CoercibleRational;
// declare function myLib3(): CoercibleRational;
// declare function myLib3(): z3.Context<"main">;

declare const c1: CoercibleRational;
declare const c2: z3.CoercibleRational;
declare const c3: import('z3').CoercibleRational;
declare const c200: string;

declare const ctx: import('z3').Context<"main">; // HERE!

/*
declare global {
  interface Window {
    const ctx: Context<"main">;
    myGlobalVariable: any;
    rat: CoercibleRational;
  }
}*/
`;

export const injectZ3IntoMonacoEditor = async (monaco: Monaco) => {
  console.log('Add extra libs!');
  const ts = monaco.languages.typescript.typescriptDefaults;

  const promises = ['z3-types/types.d.ts'].map(async (filePath) => {
    const resp = await fetch(filePath);
    const text = await resp.text();

    ts.addExtraLib(
      `
      declare module 'z3' { ${text} }
      declare const c5: z3.CoercibleRational;
      
      
      `,
      'z3'
      // './z3.d.ts' // does not matter
    );
  });

  await Promise.all(promises);

  // TODO can be put above?
  ts.addExtraLib(MY_GLOBALS);

  ts.setCompilerOptions({
    ...ts.getCompilerOptions(),
    module: 99,
    target: 99,
  });
};
