import {
  GetTodosQuery,
  GetTodosResponse,
} from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { FailedToGetTodos } from '@nest-plus-io-ts-experiment/get-todos-via-fetch-in-todos';
import { TaskEither } from 'fp-ts/TaskEither';

export interface Filters {
  completed?: boolean;
}

export interface GetTodoList {
  readonly getList: (
    data?: GetTodosQuery
  ) => TaskEither<FailedToGetTodos, GetTodosResponse>;
}
