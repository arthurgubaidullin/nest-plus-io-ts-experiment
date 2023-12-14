import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';

export interface GetTodos {
  readonly getTodos: () => Promise<readonly TodoDpo[]>;
}
