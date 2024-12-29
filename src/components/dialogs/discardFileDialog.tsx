import React, { createContext, useCallback, useContext, useState } from 'react';
import { Dialog, useDialogProps } from './dialog';
import {
  DialogButtons,
  DialogButton,
  DialogParagraph,
  Emph,
} from './dialogContent';

type Props = {
  onFileDiscard: (fileName: string) => void;
};

export const DiscardFileDialog = ({ onFileDiscard }: Props) => {
  const { discardedFilePath, setDiscardedFilePath } = useDiscardFileContext();
  const isOpen = discardedFilePath !== undefined;
  const setClosed = useCallback(
    () => setDiscardedFilePath(undefined),
    [setDiscardedFilePath]
  );
  const dialogProps = useDialogProps(isOpen, setClosed);

  const filename = discardedFilePath || '';

  return (
    <Dialog
      {...dialogProps}
      dialogLabel="Discard file"
      id="discard-file-dialog"
    >
      <DialogParagraph>
        The file <Emph>&quot;{filename}&quot;</Emph> is part of the
        documentation. You are free to edit it and test things out.
      </DialogParagraph>

      <DialogParagraph>
        Discarding the changes will restore the original file content.
      </DialogParagraph>

      <DialogButtons>
        <DialogButton
          danger
          onClick={() => {
            onFileDiscard(filename);
            dialogProps.onForceCloseDialog();
          }}
        >
          Yes, discard the changes
        </DialogButton>
      </DialogButtons>
    </Dialog>
  );
};

interface ContextType {
  discardedFilePath: string | undefined;
  setDiscardedFilePath: (f: string | undefined) => void;
}

const DiscardFileContext_INTERNAL = createContext<ContextType>(undefined!);

export const DiscardFileContext = {
  Provider: (p: React.PropsWithChildren) => {
    const [discardedFilePath, setDiscardedFilePath] = useState<
      string | undefined
    >();
    return (
      <DiscardFileContext_INTERNAL.Provider
        value={{
          discardedFilePath,
          setDiscardedFilePath,
        }}
      >
        {p.children}
      </DiscardFileContext_INTERNAL.Provider>
    );
  },
};

export const useDiscardFileContext = () => {
  return useContext(DiscardFileContext_INTERNAL);
};
