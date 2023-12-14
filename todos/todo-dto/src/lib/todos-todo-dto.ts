import { NonEmptyString } from 'io-ts-types';

export interface TodoDto {
  readonly id: NonEmptyString;
  readonly content: NonEmptyString;
}
