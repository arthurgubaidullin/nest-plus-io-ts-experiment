import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';

export interface UpdateTodo {
  readonly update: (todo: TodoDpo) => Promise<void>;
}
