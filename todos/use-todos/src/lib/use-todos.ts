import { useTodosServerApi } from '@nest-plus-io-ts-experiment/server-api-context-in-todos';
import { GetTodosResponse } from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { FailedToGetTodos } from '@nest-plus-io-ts-experiment/server-api-type-in-todos';
import { useTodosStore } from '@nest-plus-io-ts-experiment/todos-store';
import { pipe } from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';
import { useEffect } from 'react';

export function useTodos() {
  const service = useTodosServerApi();

  const { todos, failure, pending, success } = useTodosStore();

  useEffect(() => {
    pipe(
      TE.fromIO(() => pending()),
      TE.chain(
        (): TE.TaskEither<FailedToGetTodos, GetTodosResponse> =>
          service.getList()
      ),
      TE.foldW(
        (e) => TE.fromIO(() => failure(e)),
        (a) => TE.fromIO(() => success(a))
      ),
      (t) => t()
    );
  }, []);

  return todos;
}
