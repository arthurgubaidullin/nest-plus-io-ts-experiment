import { GetAllTodos } from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import { TodoDto } from '@nest-plus-io-ts-experiment/todo-dto-in-todos';

export const getTodos =
  (repository: GetAllTodos) => async (): Promise<readonly TodoDto[]> => {
    return await repository.getAll();
  };
