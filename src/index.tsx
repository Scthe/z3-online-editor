import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { isProductionBuild } from './utils';
import { App } from './app';
import { initZ3 } from './z3/z3-api';
import { FILES } from './vfs';
// import { injectZ3IntoMonacoEditor } from './z3/z3-monaco';

/*
(function () {
  if (!isProductionBuild()) {
    // eslint-disable-next-line no-console
    console.log('Starting esbuild live reload');
    new EventSource('/esbuild').addEventListener('change', () =>
      location.reload()
    );
  }
})();
*/

async function main() {
  const z3InitResult = await initZ3();
  if (z3InitResult.status === 'error') {
    const err = z3InitResult.error;
    // TODO print to screen
    return;
  }

  // injectZ3IntoMonacoEditor();

  console.log('FILES', FILES);

  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(
    <React.StrictMode>
      <App z3={z3InitResult.z3} />
    </React.StrictMode>
  );
}

main();
