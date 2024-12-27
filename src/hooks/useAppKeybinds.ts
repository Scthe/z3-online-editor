import { useHotkeys } from 'react-hotkeys-hook';
import { useCodeExecState } from '../state/codeExec';
import { useLayoutState } from '../state/layout';
import { useCallback, useRef } from 'react';
import { EditorOnMountFn } from '../components/codeEditorPanel/types';

const META_KEY = /Mac OS/.test(navigator.userAgent) ? 'Cmd' : 'Ctrl';

export const KEY_BIND_LABEL = {
  runCode: `[${META_KEY} + b]`,
  toggleFilesSidebar: `[${META_KEY} + e]`,
};

/**
 *
 * - `ctrl-b` - run file
 * - `ctrl-\` - file explorer
 * - (maybe) `ctrl-`` - terminal minimize
 */
export function useAppKeybinds(execEditorCode: () => void) {
  const toggleShowFilesPanel = useLayoutState((s) => s.toggleShowFilesPanel);
  const execState = useCodeExecState((s) => s.status);

  // run code
  const execCode = useCallback(() => {
    if (execState === 'idle') {
      execEditorCode();
    }
  }, [execEditorCode, execState]);
  useHotkeys(
    ['ctrl+b', 'cmd+b'], //
    execCode,
    { preventDefault: true },
    [execCode]
  );

  // toggleShowFilesPanel
  useHotkeys(
    ['ctrl+e', 'cmd+e', 'ctrl+\\', 'cmd+\\'],
    toggleShowFilesPanel,
    { preventDefault: true },
    []
  );

  // warning: this is only executed once!
  // whatever is captured in the closure will exec!
  const monacoCbWrapperRef = useRef({ execCode, toggleShowFilesPanel });
  monacoCbWrapperRef.current.execCode = execCode;
  monacoCbWrapperRef.current.toggleShowFilesPanel = toggleShowFilesPanel;
  const onMonacoMount: EditorOnMountFn = useCallback(
    (editor, monaco) => {
      const cbs = monacoCbWrapperRef.current;
      editor.addCommand(
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyB, //
        () => cbs.execCode()
      );
      editor.addCommand(
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyE, //
        () => cbs.toggleShowFilesPanel()
      );
      editor.addCommand(
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.Backslash, //
        () => cbs.toggleShowFilesPanel()
      );
    },
    [] // forced!
  );

  return onMonacoMount;
}
