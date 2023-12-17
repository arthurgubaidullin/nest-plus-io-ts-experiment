import { getServerApi } from '@nest-plus-io-ts-experiment/server-api-in-todos';
import { TodosStateManagerProvider } from '@nest-plus-io-ts-experiment/state-manager-context-in-todos';
import { getTodosStateManager } from '@nest-plus-io-ts-experiment/state-manager-in-todos';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const todosStateManager = pipe(
  getServerApi({ host: '//localhost:3000' }),
  getTodosStateManager
);

root.render(
  <StrictMode>
    <TodosStateManagerProvider value={O.some(todosStateManager)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodosStateManagerProvider>
  </StrictMode>
);
