import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { initZ3 } from './z3/z3-api';
import { loadFiles } from './vfs-content';
import { VirtualFs } from './vfs-impl';
import { restoreLocalVirtualFsChanges } from './vfs-impl/persist';
import { VirtualFsContext } from './vfs-impl/hooks';
import { getInitialFile } from './fileHistory';
import { DiscardFileContext } from './components/dialogs/discardFileDialog';

async function main() {
  const z3InitResult = await initZ3();
  if (z3InitResult.status === 'error') {
    const err = z3InitResult.error;
    const errMsg = err instanceof Error ? err.message : 'Unknown error';
    showErrorMessage(`Z3 init error: ${errMsg}`);
    return;
  }

  const originalFileSystem = new VirtualFs();
  const userFileSystem = new VirtualFs();
  loadFiles(originalFileSystem);
  loadFiles(userFileSystem);

  try {
    restoreLocalVirtualFsChanges(userFileSystem);
  } catch (e) {
    console.error('Could not restore local file system changes', e);
  }

  const initalFile = getInitialFile(userFileSystem);
  // eslint-disable-next-line no-console
  console.log(`Inital file '${initalFile}'`);

  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(
    <React.StrictMode>
      <VirtualFsContext.Provider value={{ originalFileSystem, userFileSystem }}>
        <DiscardFileContext.Provider>
          <App z3={z3InitResult.z3} initialFile={initalFile} />
        </DiscardFileContext.Provider>
      </VirtualFsContext.Provider>
    </React.StrictMode>
  );
}

main();

function showErrorMessage(msg: string) {
  const wrapperEl = document.getElementById('error-wrapper')!;
  const textEl = document.getElementById('error-msg')!;
  wrapperEl.style.display = 'flex';
  textEl.textContent = msg;
}
