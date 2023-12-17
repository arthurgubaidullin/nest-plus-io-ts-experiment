import * as t from 'io-ts';
import { DateFromISOString, NonEmptyString } from 'io-ts-types';

export interface ChangeTodoContentCommand
  extends t.TypeOf<typeof ChangeTodoContentCommand> {}

export type EncodedChangeTodoContentCommand = t.OutputOf<
  typeof ChangeTodoContentCommand
>;

export const ChangeTodoContentCommand = t.readonly(
  t.strict({
    _tag: t.literal('ChangeTodoContent'),
    id: NonEmptyString,
    content: NonEmptyString,
    updatedAt: DateFromISOString,
  }),
  'ChangeTodoContentCommand'
);
