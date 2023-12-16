import { Option } from 'fp-ts/Option';
import { NonEmptyString } from 'io-ts-types';

export interface TodoDpo {
  readonly id: NonEmptyString;
  readonly content: NonEmptyString;
  readonly createdAt: Date;
  readonly updatedAt: Option<Date>;
}
