import {
  EncodedGetTodosResponse,
  GetTodosQuery,
  GetTodosResponse,
} from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { getTodoLists } from '@nest-plus-io-ts-experiment/get-todos-in-todos';
import { GetTodoList } from '@nest-plus-io-ts-experiment/repository-type-in-todos';

export const getTodos =
  (repository: GetTodoList) =>
  async (query: GetTodosQuery): Promise<EncodedGetTodosResponse> => {
    const todos = await getTodoLists(repository)(query);
    return GetTodosResponse.encode(todos);
  };
