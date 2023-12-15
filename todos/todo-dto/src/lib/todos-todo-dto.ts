import * as t from 'io-ts';
import { NonEmptyString } from 'io-ts-types';

export interface TodoDto extends t.TypeOf<typeof TodoDto> {}

export const TodoDto = t.readonly(
  t.strict({
    id: NonEmptyString,
    content: NonEmptyString,
  })
);
