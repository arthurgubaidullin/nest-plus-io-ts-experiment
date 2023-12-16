import {
  NotFoundTodo,
  changeTodoContent,
  changeTodoState,
} from '@nest-plus-io-ts-experiment/change-todo-in-todos';
import { createTodo } from '@nest-plus-io-ts-experiment/create-todo-in-todos';
import { TodosCommands } from '@nest-plus-io-ts-experiment/dispatch-commands-contract-in-todos';
import {
  CreateTodo,
  GetTodo,
  UpdateTodo,
} from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import { FailedToChangeTodo } from '@nest-plus-io-ts-experiment/todo-in-todos';
import { absurd, pipe } from 'fp-ts/function';
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';

export const dispatchCommand =
  (repo: GetTodo & CreateTodo & UpdateTodo) =>
  (
    command: TodosCommands
  ): Promise<E.Either<NotFoundTodo | FailedToChangeTodo, void>> => {
    switch (command._tag) {
      case 'CreateTodo':
        return pipe(
          async () => createTodo(repo)(command.value),
          TE.fromTask,
          (t) => t()
        );
      case 'ChangeTodoContent':
        return changeTodoContent(repo)(command.value);
      case 'ChangeTodoState':
        return changeTodoState(repo)(command.value);

      default:
        absurd(command);
        throw new TypeError();
    }
  };
