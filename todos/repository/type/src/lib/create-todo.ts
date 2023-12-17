import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';
import { TaskEither } from 'fp-ts/TaskEither';
import { TodoAlreadyExists } from './todo-already-exists';

export interface CreateTodo {
  readonly create: (todo: TodoDpo) => TaskEither<TodoAlreadyExists, void>;
}
