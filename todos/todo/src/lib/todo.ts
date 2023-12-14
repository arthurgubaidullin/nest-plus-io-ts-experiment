import { NonEmptyString } from 'io-ts-types';

export interface Todo {
  readonly id: NonEmptyString;
  readonly content: NonEmptyString;
}

export const create = (
  data: Readonly<{
    id: NonEmptyString;
    content: NonEmptyString;
  }>
): Todo => {
  return {
    id: data.id,
    content: data.content,
  };
};
