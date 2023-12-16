import * as t from 'io-ts';
import { DateFromISOString, NonEmptyString } from 'io-ts-types';

export interface TodoDto extends t.TypeOf<typeof TodoDto> {}

export const TodoDto = t.readonly(
  t.strict({
    id: NonEmptyString,
    content: NonEmptyString,
    createdAt: DateFromISOString,
  })
);

export type TodoDtoList = t.TypeOf<typeof TodoDtoList>;

export const TodoDtoList = t.readonlyArray(TodoDto);
