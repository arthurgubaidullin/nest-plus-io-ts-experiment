import * as O from 'fp-ts/Option';
import { createContext, useContext } from 'react';
import { TodosServiceConfig } from '@nest-plus-io-ts-experiment/client-service-config-in-todos';
import { identity, pipe } from 'fp-ts/function';

const TodosServiceContext = createContext<O.Option<TodosServiceConfig>>(O.none);

export const TodosServiceProvider = TodosServiceContext.Provider;

export const useTodosServiceContext = () =>
  pipe(
    useContext(TodosServiceContext),
    O.fold(() => {
      throw new TypeError('Not found TodosServiceContext.');
    }, identity)
  );
