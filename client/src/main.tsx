import { TodosServiceProvider } from '@nest-plus-io-ts-experiment/client-service-context-in-todos';
import { getService as getTodosService } from '@nest-plus-io-ts-experiment/client-service-in-todos';
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
      value={O.some(getTodosService({ host: '//localhost:3000' }))}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodosServiceProvider>
  </StrictMode>
);
