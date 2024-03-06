import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

async function enableMocking() {
  if (!['development', 'test'].includes(String(process.env.NODE_ENV))) {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    serviceWorker: { url: '/technique-map/mockServiceWorker.js' },
  });
}

enableMocking().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
