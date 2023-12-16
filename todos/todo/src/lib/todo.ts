import * as O from 'fp-ts/Option';
import { NonEmptyString } from 'io-ts-types';

enum State {
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
}

export interface Todo {
  readonly id: NonEmptyString;
  readonly content: NonEmptyString;
  readonly state: State;
  readonly createdAt: Date;
  readonly updatedAt: O.Option<Date>;
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
    updatedAt: O.none,
  };
};
