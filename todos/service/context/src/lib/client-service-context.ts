import { TodosService } from '@nest-plus-io-ts-experiment/service-type-in-todos';
import * as O from 'fp-ts/Option';
import { identity, pipe } from 'fp-ts/function';
import { createContext, useContext } from 'react';

const TodosServiceContext = createContext<O.Option<TodosService>>(O.none);

export const TodosServiceProvider = TodosServiceContext.Provider;

export const useTodosServiceContext = () =>
  pipe(
    useContext(TodosServiceContext),
    O.fold(() => {
      throw new TypeError('Not found TodosServiceContext.');
    }, identity)
  );
