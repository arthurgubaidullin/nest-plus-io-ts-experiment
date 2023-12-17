import * as t from 'io-ts';
import { DateFromISOString, NonEmptyString } from 'io-ts-types';

const State = t.keyof({ IN_PROGRESS: null, COMPLETED: null });

export interface ChangeTodoStateCommand
  extends t.TypeOf<typeof ChangeTodoStateCommand> {}

export type EncodedChangeTodoStateCommand = t.OutputOf<
  typeof ChangeTodoStateCommand
>;

export const ChangeTodoStateCommand = t.readonly(
  t.strict({
    _tag: t.literal('ChangeTodoState'),
    id: NonEmptyString,
    state: State,
    updatedAt: DateFromISOString,
  })
);
