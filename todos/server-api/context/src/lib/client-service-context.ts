import { TodosServerApi } from '@nest-plus-io-ts-experiment/server-api-type-in-todos';
import * as O from 'fp-ts/Option';
import { identity, pipe } from 'fp-ts/function';
import { createContext, useContext } from 'react';

const TodosServerApiContext = createContext<O.Option<TodosServerApi>>(O.none);

export const TodosServerApiProvider = TodosServerApiContext.Provider;

export const useTodosServerApi = (): TodosServerApi =>
  pipe(
    useContext(TodosServerApiContext),
    O.fold(() => {
      throw new TypeError('Not found TodosServiceContext.');
    }, identity)
  );
