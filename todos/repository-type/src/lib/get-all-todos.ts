import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';

export interface GetTodos {
  readonly getAll: () => Promise<readonly TodoDpo[]>;
}
