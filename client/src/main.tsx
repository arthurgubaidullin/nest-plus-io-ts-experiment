import { ConfigProvider } from '@nest-plus-io-ts-experiment/client-config';
import * as O from 'fp-ts/Option';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ConfigProvider value={O.some({ host: '//localhost:3000' })}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>
);
