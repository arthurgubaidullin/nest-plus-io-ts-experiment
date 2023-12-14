import * as t from 'io-ts';
import { NonEmptyString } from 'io-ts-types';

export interface CreateTodoCommand extends t.TypeOf<typeof CreateTodoCommand> {}

export const CreateTodoCommand = t.readonly(
  t.strict({
    id: NonEmptyString,
    content: NonEmptyString,
  })
);
