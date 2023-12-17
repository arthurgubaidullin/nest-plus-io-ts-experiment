import { TodosStateManager } from '@nest-plus-io-ts-experiment/state-manager-type-in-todos';
import * as O from 'fp-ts/Option';
import { identity, pipe } from 'fp-ts/function';
import { createContext, useContext } from 'react';

const TodosStateManagerContext = createContext<O.Option<TodosStateManager>>(
  O.none
);

export const TodosStateManagerProvider = TodosStateManagerContext.Provider;

export const useTodosStateManager = (): TodosStateManager =>
  pipe(
    useContext(TodosStateManagerContext),
    O.fold(() => {
      throw new TypeError('Not found TodosStateManager.');
    }, identity)
  );
