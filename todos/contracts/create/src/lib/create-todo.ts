import * as t from 'io-ts';
import { DateFromISOString, NonEmptyString } from 'io-ts-types';

export interface CreateTodoCommand extends t.TypeOf<typeof CreateTodoCommand> {}

export type EncodedCreateTodoCommand = t.OutputOf<typeof CreateTodoCommand>;

export const CreateTodoCommand = t.readonly(
  t.strict({
    id: NonEmptyString,
    content: NonEmptyString,
    createdAt: DateFromISOString,
  })
);
