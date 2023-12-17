import { Option } from 'fp-ts/Option';
import { NonEmptyString } from 'io-ts-types';

type State = 'IN_PROGRESS' | 'COMPLETED';

export interface TodoDpo {
  readonly id: NonEmptyString;
  readonly content: NonEmptyString;
  readonly state: State;
  readonly createdAt: Date;
  readonly updatedAt: Option<Date>;
}
