import { GetTodos } from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import { TodoDto } from '@nest-plus-io-ts-experiment/todo-dto-in-todos';

export const getTodos =
  (repository: GetTodos) => async (): Promise<readonly TodoDto[]> => {
    return await repository.getAll();
  };
