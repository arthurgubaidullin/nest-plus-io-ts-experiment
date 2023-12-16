import * as t from 'io-ts';
import { JsonFromString } from 'io-ts-types';

const Filters = t.exact(
  t.partial({
    completed: t.boolean,
  })
);

export const FiltersFromString = t.string.pipe(JsonFromString).pipe(Filters);
