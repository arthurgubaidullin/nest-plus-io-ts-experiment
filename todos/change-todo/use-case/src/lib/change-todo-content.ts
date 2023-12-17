import { ChangeTodoContentCommand } from '@nest-plus-io-ts-experiment/change-todo-command-in-todos';
import {
  GetTodo,
  NotFoundTodo,
  UpdateTodo,
} from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import * as Todo from '@nest-plus-io-ts-experiment/todo-in-todos';
import * as TE from 'fp-ts/TaskEither';
import { pipe } from 'fp-ts/function';

export const changeTodoContent =
  (repository: GetTodo & UpdateTodo) =>
  (
    data: ChangeTodoContentCommand
  ): TE.TaskEither<NotFoundTodo | Todo.FailedToChangeTodo, void> =>
    pipe(
      repository.get(data.id),
      TE.map(Todo.fromDpo),
      TE.chainEitherKW(Todo.changeContent(data)),
      TE.chainW((todo) => repository.update(todo))
    );
