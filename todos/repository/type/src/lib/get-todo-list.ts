import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';
import { TaskEither } from 'fp-ts/TaskEither';

export interface Filters {
  completed?: boolean;
}

export interface GetTodoList {
  readonly getList: (
    data?: Readonly<{ filters?: Filters }>
  ) => TaskEither<never, readonly TodoDpo[]>;
}
