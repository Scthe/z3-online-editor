import EditorOrg from '@monaco-editor/react';

// trust me, this is the easiest way to get typings for Monaco
export type EditorProps = React.ComponentProps<typeof EditorOrg>;
export type EditorOnMountFn = NonNullable<EditorProps['onMount']>;
export type Monaco = Parameters<EditorOnMountFn>[1];
export type Editor = Parameters<EditorOnMountFn>[0];
