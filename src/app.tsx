import React, {
  ComponentProps,
  PropsWithChildren,
  useCallback,
  useRef,
} from 'react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { Z3_Wrapper } from './z3/z3-api';
import { FILES } from './vfs';
import { CodeEditor } from './components/codeEditor';
import classNames from 'classnames';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { useExecCode } from './hooks/useExecCode';
import { useCodeExecStateStore } from './state/codeExec';
import { OutputLogs } from './components/outputLogs';
import { OutputTitleBar } from './components/outputTitleBar';
import { WithClassName } from './utils';
import { CodeEditorTitleBar } from './components/codeEditorTitleBar';

// TODO add support for back button to switch files
// TODO h1 - app name
// TODO two-column layout if possible?
// TODO output panels shows current file name or one that is executing?
// TODO keyboard shortcuts
// TODO persist the user's file to localstorage
// TODO rename: z3-online-editor
// TODO there are still some layout problems. Code editor height does not shrink on resize. Will be fixed with panel layout?

interface Props {
  z3: Z3_Wrapper;
}

export const App = ({ z3 }: Props) => {
  const file = FILES[0];

  const editorRef = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);

  // useEffect(() => {
  // editorRef.current?.focus();
  // }, [file.name]);

  const execState = useCodeExecStateStore((s) => s.status);
  const { abortRun, runCode } = useExecCode(z3);

  const execEditorCode = useCallback(async () => {
    if (execState === 'running') {
      abortRun();
      return;
    }

    // get current text
    const code = editorRef?.current?.getValue() || '';
    runCode({ filename: file.name, code });
  }, [abortRun, execState, file.name, runCode]);

  // const [isTwoColumnLayout, setIsTwoColumnLayout] = useState(true);
  const isTwoColumnLayout = false;

  return (
    <main
      className={classNames(
        'w-full min-h-svh relative font-mono bg-panelSpacing'
      )}
    >
      <PanelGroup
        direction={isTwoColumnLayout ? 'horizontal' : 'vertical'}
        className={classNames(isTwoColumnLayout ? '' : 'min-h-svh')}
      >
        {/* panel: code editor */}
        <MyPanel
          isTwoColumnLayout={isTwoColumnLayout}
          minSize={10}
          className={classNames(
            'bg-vscodebg',
            isTwoColumnLayout ? 'rounded-r-sm' : 'rounded-b-sm'
          )}
        >
          {/* TODO add files toggle */}
          <CodeEditorTitleBar
            filename={file.name}
            onCodeExec={execEditorCode}
          />
          <CodeEditor file={file} z3={z3} editorRef={editorRef} />
        </MyPanel>

        <MyPanelResizeHandle vertical={isTwoColumnLayout} />

        {/* panel: output */}
        <MyPanel
          isTwoColumnLayout={isTwoColumnLayout}
          className={classNames(
            'bg-vscodebg/40',
            isTwoColumnLayout ? 'rounded-l-sm' : 'rounded-t-sm'
          )}
          // collapsible
          // collapsedSize={2}
          // minSize={2}
          collapsible={!isTwoColumnLayout}
          collapsedSize={7}
          minSize={7}
        >
          <OutputTitleBar />
          <OutputLogs />
        </MyPanel>
      </PanelGroup>
    </main>
  );
};

type MyPanelProps = ComponentProps<typeof Panel> & {
  isTwoColumnLayout: boolean;
};

const MyPanel = ({
  isTwoColumnLayout,
  className,
  children,
  ...props
}: MyPanelProps) => (
  <Panel
    {...props}
    className={classNames(
      'flex flex-col',
      isTwoColumnLayout ? 'min-h-svh max-h-svh overflow-hidden' : '',
      className
    )}
  >
    {children}
  </Panel>
);

const MyPanelResizeHandle = (props: { vertical?: boolean }) => (
  <PanelResizeHandle className={props.vertical ? 'w-[1px]' : 'h-[1px]'} />
);
