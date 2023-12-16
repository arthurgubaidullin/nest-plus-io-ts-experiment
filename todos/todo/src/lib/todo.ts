import { NonEmptyString } from 'io-ts-types';

export interface Todo {
  readonly id: NonEmptyString;
  readonly content: NonEmptyString;
  readonly createdAt: Date;
}

export const create = (
  data: Readonly<{
    id: NonEmptyString;
    content: NonEmptyString;
    createdAt: Date;
  }>
): Todo => {
  return {
    id: data.id,
    content: data.content,
    createdAt: data.createdAt,
  };
};
