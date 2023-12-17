import { TodosServerApi } from '@nest-plus-io-ts-experiment/server-api-type-in-todos';
import { TodosStateManager } from '@nest-plus-io-ts-experiment/state-manager-type-in-todos';
import { useTodosStore } from '@nest-plus-io-ts-experiment/todos-store';
import * as T from 'fp-ts/Task';
import * as TE from 'fp-ts/TaskEither';
import { pipe } from 'fp-ts/function';

export const getTodosStateManager = (
  api: TodosServerApi
): TodosStateManager => {
  const manager: TodosStateManager = {
    useTodos: () => {
      const { todos } = useTodosStore();
      return todos;
    },
    addTodo: async (command) =>
      pipe(
        { _tag: 'CreateTodo' as const, ...command },
        api.dispatch,
        TE.fold(
          (e) =>
            T.fromIO(() => {
              console.error(e);
            }),
          () =>
            T.fromIO(() => {
              manager.getTodos();
            })
        ),
        (t) => t()
      ),
    getTodos: pipe(
      TE.fromIO(() => useTodosStore.getState().pending()),
      TE.chain(() => api.getList()),
      TE.fold(
        (e) =>
          T.fromIO(() => {
            useTodosStore.getState().failure(e);
          }),
        (a) =>
          T.fromIO(() => {
            useTodosStore.getState().success(a);
          })
      )
    ),
  };
  return manager;
};
