import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import { NonEmptyString } from 'io-ts-types';
import { FailedToChangeTodo } from './failed-to-change-todo';
import { InvalidState } from './invalid-state';
import * as UpdatedAt from './updated-at';

enum State {
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
}

export interface Todo {
  readonly id: NonEmptyString;
  readonly content: NonEmptyString;
  readonly state: State;
  readonly createdAt: Date;
  readonly updatedAt: UpdatedAt.UpdatedAt;
}

export const create = (
  data: Readonly<{
    id: NonEmptyString;
    content: NonEmptyString;
    createdAt: Date;
  }>
): Todo => {
  return {
    id: data.id,
    state: State.InProgress,
    content: data.content,
    createdAt: data.createdAt,
    updatedAt: UpdatedAt.create(),
  };
};

export const changeContent =
  (
    data: Readonly<{
      content: NonEmptyString;
      updatedAt: Date;
    }>
  ) =>
  (todo: Todo): E.Either<FailedToChangeTodo, Todo> =>
    pipe(
      E.Do,
      E.bindW('updatedAt', () => pipe(todo, UpdatedAt.change(data))),
      E.chainW(
        E.fromPredicate(
          () => todo.state === State.InProgress,
          () => new InvalidState()
        )
      ),
      E.map(
        ({ updatedAt }): Todo => ({
          id: todo.id,
          state: State.InProgress,
          content: data.content,
          createdAt: todo.createdAt,
          updatedAt: updatedAt,
        })
      )
    );

export const changeState =
  (
    data: Readonly<{
      state: State;
      updatedAt: Date;
    }>
  ) =>
  (todo: Todo): E.Either<FailedToChangeTodo, Todo> =>
    pipe(
      E.Do,
      E.bindW('updatedAt', () => pipe(todo, UpdatedAt.change(data))),
      E.chainW(
        E.fromPredicate(
          () => todo.state === data.state,
          () => new InvalidState()
        )
      ),
      E.map(
        ({ updatedAt }): Todo => ({
          id: todo.id,
          state: data.state,
          content: todo.content,
          createdAt: todo.createdAt,
          updatedAt: updatedAt,
        })
      )
    );
