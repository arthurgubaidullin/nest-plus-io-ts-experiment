import { Todo } from '@nest-plus-io-ts-experiment/todo-in-todos';

export interface CreateTodo {
  readonly create: (todo: Todo) => void;
}
