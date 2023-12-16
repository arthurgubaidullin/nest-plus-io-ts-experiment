import * as t from 'io-ts';

export type Response = t.TypeOf<typeof Response>;

export const Response = t.readonly(
  t.strict({
    message: t.string,
  })
);
