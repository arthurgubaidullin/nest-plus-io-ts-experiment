import { TodosServiceProvider } from '@nest-plus-io-ts-experiment/server-api-context-in-todos';
import { getServerApi } from '@nest-plus-io-ts-experiment/server-api-in-todos';
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
    <TodosServiceProvider
      value={O.some(getServerApi({ host: '//localhost:3000' }))}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodosServiceProvider>
  </StrictMode>
);
