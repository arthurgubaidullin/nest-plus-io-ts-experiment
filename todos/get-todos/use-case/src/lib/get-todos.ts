import {
  Filters,
  GetTodoList,
} from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import { TodoDto } from '@nest-plus-io-ts-experiment/todo-dto-in-todos';

export const getTodoLists =
  (repository: GetTodoList) =>
  async (
    data?: Readonly<{ filters?: Filters }>
  ): Promise<readonly TodoDto[]> => {
    return await repository.getList(data);
  };
