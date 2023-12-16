import { CreateTodoCommand } from '@nest-plus-io-ts-experiment/create-todo-command-in-todos';
import { CreateTodo } from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import * as Todo from '@nest-plus-io-ts-experiment/todo-in-todos';

export const createTodo =
  (repository: CreateTodo) =>
  async (data: CreateTodoCommand): Promise<void> => {
    const todo = Todo.create(data);
    await repository.create(todo);
  };
