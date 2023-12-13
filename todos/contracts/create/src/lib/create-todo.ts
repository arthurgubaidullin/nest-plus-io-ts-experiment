import * as t from 'io-ts';
import { NonEmptyString } from 'io-ts-types';

export interface CreateTodo extends t.TypeOf<typeof CreateTodo> {}

export const CreateTodo = t.readonly(
  t.strict({
    id: NonEmptyString,
    content: NonEmptyString,
  })
);
