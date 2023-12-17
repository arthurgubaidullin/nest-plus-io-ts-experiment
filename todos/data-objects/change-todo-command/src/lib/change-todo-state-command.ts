import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';
import * as t from 'io-ts';
import { DateFromISOString, NonEmptyString } from 'io-ts-types';

type State = t.TypeOf<typeof State>;

const State = t.keyof({ IN_PROGRESS: null, COMPLETED: null });

export interface ChangeTodoStateCommand
  extends t.TypeOf<typeof ChangeTodoStateCommand> {}

export type EncodedChangeTodoStateCommand = t.OutputOf<
  typeof ChangeTodoStateCommand
>;

export const ChangeTodoStateCommand = t.readonly(
  t.strict({
    _tag: t.literal('ChangeTodoState'),
    id: NonEmptyString,
    state: State,
    updatedAt: DateFromISOString,
  }),
  'ChangeTodoStateCommand'
);

export type ChangeTodoStateCommandData = Readonly<{
  id: string;
  state: State;
  updatedAt: Date;
}>;

export const createChangeTodoStateCommand = (
  data: ChangeTodoStateCommandData
): O.Option<ChangeTodoStateCommand> =>
  pipe(
    O.Do,
    O.bind('id', () => pipe(data.id, O.fromPredicate(NonEmptyString.is))),
    O.map(
      ({ id }): ChangeTodoStateCommand => ({
        _tag: 'ChangeTodoState',
        id,
        state: data.state === 'IN_PROGRESS' ? 'COMPLETED' : 'IN_PROGRESS',
        updatedAt: data.updatedAt,
      })
    )
  );
