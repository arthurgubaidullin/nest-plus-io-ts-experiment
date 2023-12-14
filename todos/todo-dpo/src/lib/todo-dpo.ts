import { NonEmptyString } from 'io-ts-types';

export interface TodoDpo {
  readonly id: NonEmptyString;
  readonly content: NonEmptyString;
}
