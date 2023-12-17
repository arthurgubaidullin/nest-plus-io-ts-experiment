import { GetTodosResponse } from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { FailedToGetTodos } from '@nest-plus-io-ts-experiment/server-api-type-in-todos';
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import * as T from 'fp-ts/Task';
import * as TE from 'fp-ts/TaskEither';
import { failure } from 'io-ts/PathReporter';

export const getTodos = (data: {
  host: string;
}): TE.TaskEither<FailedToGetTodos, GetTodosResponse> =>
  pipe(
    async () => fetch(`${data.host}/api/todos`),
    T.chain((resp) => async (): Promise<unknown> => resp.json()),
    TE.fromTask,
    TE.chainEitherK((data) =>
      pipe(
        data,
        GetTodosResponse.decode,
        E.mapLeft(failure),
        E.mapLeft(() => new FailedToGetTodos())
      )
    )
  );
