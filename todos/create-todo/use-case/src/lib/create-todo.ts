import { CreateTodoCommand } from '@nest-plus-io-ts-experiment/create-todo-contract-in-todos';
import {
  CreateTodo,
  TodoAlreadyExists,
} from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import * as Todo from '@nest-plus-io-ts-experiment/todo-in-todos';
import * as TE from 'fp-ts/TaskEither';
import { pipe } from 'fp-ts/function';

export const createTodo =
  (repository: CreateTodo) =>
  (data: CreateTodoCommand): TE.TaskEither<TodoAlreadyExists, void> =>
    pipe(
      Todo.create(data),
      TE.right,
      TE.chain((todo) => repository.create(todo))
    );
