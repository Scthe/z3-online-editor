import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { initZ3 } from './z3/z3-api';
import { VIRTUAL_FILE_SYSTEM } from './vfs-content';
import { vfsDebugTree } from './vfs-impl';
import { restoreVirtualFs } from './vfs-impl/vfsPersist';

async function main() {
  const z3InitResult = await initZ3();
  if (z3InitResult.status === 'error') {
    const err = z3InitResult.error;
    const errMsg = err instanceof Error ? err.message : 'Unknown error';
    showErrorMessage(`Z3 init error: ${errMsg}`);
    return;
  }

  try {
    restoreVirtualFs(VIRTUAL_FILE_SYSTEM);
  } catch (e) {
    console.error('Could not restore local file system changes', e);
  }
  vfsDebugTree(VIRTUAL_FILE_SYSTEM);

  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(
    <React.StrictMode>
      <App z3={z3InitResult.z3} />
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
