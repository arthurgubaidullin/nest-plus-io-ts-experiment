import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';
import { TaskEither } from 'fp-ts/TaskEither';
import { NonEmptyString } from 'io-ts-types';
import { NotFoundTodo } from './not-found-todo';

export interface GetTodo {
  readonly get: (todoId: NonEmptyString) => TaskEither<NotFoundTodo, TodoDpo>;
}
