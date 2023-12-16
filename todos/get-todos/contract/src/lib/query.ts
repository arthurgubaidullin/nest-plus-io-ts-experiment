import * as t from 'io-ts';
import { FiltersFromString } from './filters';

export type GetTodosQuery = t.TypeOf<typeof GetTodosQuery>;

export type EncodedGetTodosQuery = t.OutputOf<typeof GetTodosQuery>;

export const GetTodosQuery = t.exact(
  t.partial({
    filters: FiltersFromString,
  })
);
