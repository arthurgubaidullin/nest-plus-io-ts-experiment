import { NonEmptyString } from 'io-ts-types';

export interface Todo {
  readonly id: NonEmptyString;
  readonly content: NonEmptyString;
}
