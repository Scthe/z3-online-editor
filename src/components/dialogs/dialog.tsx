import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { DialogCloseBtn } from './dialogContent';
import { HISTORY } from '../../fileHistory';

export type DialogElRef = React.RefObject<HTMLDialogElement>;

export const useDialogProps = (
  isOpen: boolean,
  setClosed: () => void
): Pick<
  Props,
  'isOpen' | 'setClosed' | 'onForceCloseDialog' | 'dialogElRef'
> => {
  const dialogElRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogElRef.current;
    if (!el) return;

    if (isOpen) {
      el.showModal();
    } else {
      el.close();
    }
  }, [isOpen]);

  const onForceCloseDialog = useCallback(() => {
    dialogElRef.current?.close();
    setClosed();
  }, [setClosed]);

  // close dialog on navigation
  useEffect(() => {
    const unlisten = HISTORY.listen(onForceCloseDialog);
    return unlisten;
  }, [onForceCloseDialog]);

  return { isOpen, setClosed, onForceCloseDialog, dialogElRef };
};

export type Props = PropsWithChildren<{
  id: string;
  dialogLabel: string;
  dialogElRef: DialogElRef;
  isOpen: boolean;
  /** Called when closed using HTML-related means. E.g. ESC key. */
  setClosed: () => void;
  /** Called from button handlers code. Has to both call `setClosed(false)` and also close the HTML `<dialog>`.  */
  onForceCloseDialog: () => void;
}>;

export const Dialog = ({
  id,
  dialogLabel,
  children,
  dialogElRef,
  isOpen,
  setClosed,
  onForceCloseDialog,
}: Props) => {
  return (
    <ReactDialogPortal isOpen={isOpen}>
      <dialog
        id={`${id}-dialog`}
        className="bg-transparent"
        ref={dialogElRef}
        onClose={setClosed}
      >
        <section className="max-w-full w-[600px] px-6 pt-4 pb-2 overflow-hidden rounded-lg">
          <DialogCloseBtn onClick={onForceCloseDialog} />

          <h2 className="mt-0 mb-3 text-xl text-center md:text-4xl">
            {dialogLabel}
          </h2>

          {children}
        </section>
      </dialog>
    </ReactDialogPortal>
  );
};

function ReactDialogPortal({
  children,
  isOpen,
}: PropsWithChildren & { isOpen: boolean }) {
  if (!isOpen) return null;

  const parentEl = document.getElementById('dialog-container')!;
  return createPortal(children, parentEl);
}
