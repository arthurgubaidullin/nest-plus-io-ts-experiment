import * as RD from '@devexperts/remote-data-ts';
import { ChangeTodoStateCommand } from '@nest-plus-io-ts-experiment/change-todo-contract-in-todos';
import { TodosServerApi } from '@nest-plus-io-ts-experiment/server-api-type-in-todos';
import { TodosStateManager } from '@nest-plus-io-ts-experiment/state-manager-type-in-todos';
import { useTodosStore } from '@nest-plus-io-ts-experiment/todos-store';
import * as O from 'fp-ts/Option';
import { findFirst } from 'fp-ts/ReadonlyArray';
import * as T from 'fp-ts/Task';
import * as TE from 'fp-ts/TaskEither';
import { constVoid, pipe } from 'fp-ts/function';

export const getTodosStateManager = (
  api: TodosServerApi
): TodosStateManager => {
  const manager: TodosStateManager = {
    toggleTodo: (todoId) =>
      pipe(
        useTodosStore.getState().todos,
        RD.toOption,
        O.chain(findFirst((a) => a.id === todoId)),
        TE.fromOption(() => 'Not found todo.' as const),
        TE.map(
          (a) =>
            ({
              _tag: 'ChangeTodoState' as const,
              id: todoId,
              state: a.state,
              updatedAt: new Date(),
            } satisfies ChangeTodoStateCommand)
        ),
        TE.chainW(api.dispatch),
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
      TE.fromIO(() =>
        !RD.isSuccess(useTodosStore.getState().todos)
          ? useTodosStore.getState().pending()
          : constVoid()
      ),
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
