import {
  Filters,
  GetTodoList,
} from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import { TodoDto } from '@nest-plus-io-ts-experiment/todo-dto-in-todos';
import { TaskEither } from 'fp-ts/TaskEither';

export const getTodoLists =
  (repository: GetTodoList) =>
  (
    data?: Readonly<{ filters?: Filters }>
  ): TaskEither<never, readonly TodoDto[]> => {
    return repository.getList(data);
  };
