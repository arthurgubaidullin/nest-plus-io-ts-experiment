import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';
import { NonEmptyString } from 'io-ts-types';
import * as O from 'fp-ts/Option';

export interface GetTodo {
  readonly get: (todoId: NonEmptyString) => Promise<O.Option<TodoDpo>>;
}
