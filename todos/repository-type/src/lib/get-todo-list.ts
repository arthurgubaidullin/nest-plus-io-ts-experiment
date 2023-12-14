import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';

export interface GetTodoList {
  readonly getList: () => Promise<readonly TodoDpo[]>;
}
