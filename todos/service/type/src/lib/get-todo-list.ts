import {
  GetTodosQuery,
  GetTodosResponse,
} from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { TaskEither } from 'fp-ts/TaskEither';

export interface Filters {
  completed?: boolean;
}

export interface GetTodoList {
  readonly getList: (
    data?: GetTodosQuery
  ) => TaskEither<never, GetTodosResponse>;
}
