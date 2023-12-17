import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';
import { TaskEither } from 'fp-ts/TaskEither';
import { NotFoundTodo } from './not-found-todo';

export interface UpdateTodo {
  readonly update: (todo: TodoDpo) => TaskEither<NotFoundTodo, void>;
}
