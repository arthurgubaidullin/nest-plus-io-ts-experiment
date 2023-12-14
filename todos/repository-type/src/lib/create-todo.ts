import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';

export interface CreateTodo {
  readonly create: (todo: TodoDpo) => void;
}
