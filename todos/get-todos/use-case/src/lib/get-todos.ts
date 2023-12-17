import {
  GetTodosQuery,
  GetTodosResponse,
} from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { GetTodoList } from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import { TaskEither } from 'fp-ts/TaskEither';

export const getTodoLists =
  (repository: GetTodoList) =>
  (data?: GetTodosQuery): TaskEither<never, GetTodosResponse> => {
    return repository.getList(data);
  };
