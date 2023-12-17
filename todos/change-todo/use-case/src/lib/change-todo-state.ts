import { ChangeTodoStateCommand } from '@nest-plus-io-ts-experiment/change-todo-contract-in-todos';
import {
  GetTodo,
  NotFoundTodo,
  UpdateTodo,
} from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import * as Todo from '@nest-plus-io-ts-experiment/todo-in-todos';
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import { pipe } from 'fp-ts/function';

export const changeTodoState =
  (repository: GetTodo & UpdateTodo) =>
  async (
    data: ChangeTodoStateCommand
  ): Promise<E.Either<NotFoundTodo | Todo.FailedToChangeTodo, void>> =>
    pipe(
      async () => await repository.get(data.id),
      TE.fromTaskOption(() => new NotFoundTodo()),
      TE.map(Todo.fromDpo),
      TE.chainEitherKW(Todo.changeState(data)),
      TE.chainTaskK((todo) => async () => await repository.update(todo)),
      (t) => t()
    );
