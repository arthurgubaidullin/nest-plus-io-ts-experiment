import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';

export interface GetAllTodos {
  readonly getAll: () => Promise<readonly TodoDpo[]>;
}
