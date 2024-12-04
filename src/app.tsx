import React, { useCallback, useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { ContextCtor } from 'z3-solver/build/browser';
import { evaluateUserZ3Script, Z3_Wrapper } from './z3/z3-api';
import { injectZ3IntoMonacoEditor } from './z3/z3-monaco';
import classNames from 'classnames';

interface Props {
  z3: Z3_Wrapper;
}

export const App = ({ z3 }: Props) => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);
  // useEffect(() => {
  // editorRef.current?.focus();
  // }, [file.name]);

  const file = {
    name: 'main.mts',
    language: 'typescript',
    // value: '// Hello World!\nconst a = window.',
    value: `const x = ctx.Int.const('x');
const y = ctx.Real.val("my-real");

const solver = new ctx.Solver();
solver.add(ctx.And(x.ge(0), x.le(9)));
const result = await solver.check();
console.log(result);
//log(result)

/*
ctx;
const a0 = myLib("aaaa");
const a2 = myLib2();
const a3 = myLib3();
const a4 = myLib4("aaaa");

const b1: CoercibleRational =  {};
const b2 =  rat;

c1
c2
c3


import * as x from "z3"
declare const c99: x.CoercibleRational;
c99.*/

`,
  };

  const execCode = useCallback(async () => {
    const userScriptText = editorRef?.current?.getValue() || '';
    const log = (...args: unknown[]) => console.log('[LOG]', ...args);

    await evaluateUserZ3Script(z3, log, userScriptText);
  }, [z3]);

  // https://codesandbox.io/p/sandbox/multi-model-editor-kugi6?file=%2Fsrc%2FApp.js
  return (
    <main className="relative flex flex-col w-full font-mono min-h-svh">
      {/* TODO put on the terminal bar */}
      <div className="absolute top-0 right-0 z-10 transition-colors bg-green-500 hover:bg-green-600">
        <button className="p-2" onClick={execCode}>
          Run
        </button>
      </div>

      <div className="flex flex-col w-full max-w-3xl py-2 mx-auto grow">
        <Editor
          // height="100svh"
          height="100%"
          className=""
          wrapperProps={{ className: 'grow' }}
          theme="vs-dark"
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          onMount={(editor, monaco) => {
            editorRef.current = editor;

            injectZ3IntoMonacoEditor(monaco);
          }}
          options={{
            // scrollBeyondLastLine: false,
            minimap: { enabled: false },
            // https://github.com/microsoft/monaco-editor/issues/1875
            // scrollbar: { alwaysConsumeMouseWheel: false },
          }}
        />
      </div>
    </main>
  );
};
