import {
  EncodedGetTodosResponse,
  GetTodosQuery,
  GetTodosResponse,
} from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { getTodoLists } from '@nest-plus-io-ts-experiment/get-todos-in-todos';
import { GetTodoList } from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import { absurd, pipe } from 'fp-ts/function';
import * as T from 'fp-ts/Task';
import * as TE from 'fp-ts/TaskEither';

export const getTodos =
  (repository: GetTodoList) =>
  async (query: GetTodosQuery): Promise<EncodedGetTodosResponse> =>
    pipe(
      getTodoLists(repository)(query),
      TE.map(GetTodosResponse.encode),
      TE.fold(
        (e) => async () => {
          absurd(e);
          throw new TypeError();
        },
        T.of
      ),
      (t) => t()
    );
