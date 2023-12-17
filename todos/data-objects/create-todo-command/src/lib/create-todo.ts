import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';
import * as t from 'io-ts';
import { DateFromISOString, NonEmptyString } from 'io-ts-types';

export interface CreateTodoCommand extends t.TypeOf<typeof CreateTodoCommand> {}

export type EncodedCreateTodoCommand = t.OutputOf<typeof CreateTodoCommand>;

export const CreateTodoCommand = t.readonly(
  t.strict({
    _tag: t.literal('CreateTodo'),
    id: NonEmptyString,
    content: NonEmptyString,
    createdAt: DateFromISOString,
  }),
  'CreateTodoCommand'
);

export const createCreateTodoCommand = (
  data: Readonly<{
    id: string;
    content: string;
    createdAt: Date;
  }>
): O.Option<CreateTodoCommand> =>
  pipe(
    O.Do,
    O.bind('content', () =>
      pipe(data.content, O.fromPredicate(NonEmptyString.is))
    ),
    O.bind('id', () => pipe(data.id, O.fromPredicate(NonEmptyString.is))),
    O.map(({ id, content }) => ({
      _tag: 'CreateTodo',
      id,
      content,
      createdAt: data.createdAt,
    }))
  );
