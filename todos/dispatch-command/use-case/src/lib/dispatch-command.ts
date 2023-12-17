import {
  changeTodoContent,
  changeTodoState,
} from '@nest-plus-io-ts-experiment/change-todo-in-todos';
import { createTodo } from '@nest-plus-io-ts-experiment/create-todo-in-todos';
import { TodosCommand } from '@nest-plus-io-ts-experiment/dispatch-command-contract-in-todos';
import {
  CreateTodo,
  GetTodo,
  NotFoundTodo,
  TodoAlreadyExists,
  UpdateTodo,
} from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import { FailedToChangeTodo } from '@nest-plus-io-ts-experiment/todo-in-todos';
import * as TE from 'fp-ts/TaskEither';
import { absurd, pipe } from 'fp-ts/function';

export const dispatchCommand =
  (repository: GetTodo & CreateTodo & UpdateTodo) =>
  (
    command: TodosCommand
  ): TE.TaskEither<
    TodoAlreadyExists | NotFoundTodo | FailedToChangeTodo,
    void
  > => {
    switch (command._tag) {
      case 'CreateTodo':
        return pipe(createTodo(repository)(command));
      case 'ChangeTodoContent':
        return changeTodoContent(repository)(command);
      case 'ChangeTodoState':
        return changeTodoState(repository)(command);

      default:
        absurd(command);
        throw new TypeError();
    }
  };
