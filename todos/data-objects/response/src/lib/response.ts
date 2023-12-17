import * as t from 'io-ts';

export const getResponseCodec = <C extends t.Mixed>(codec: C) =>
  t.union([
    t.readonly(
      t.strict({
        ok: t.literal(true),
        data: codec,
      })
    ),
    t.readonly(
      t.strict({
        ok: t.literal(false),
        errors: t.union([t.string, t.readonlyArray(t.string)]),
      })
    ),
  ]);
