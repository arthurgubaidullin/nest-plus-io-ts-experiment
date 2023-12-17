import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';

export interface Filters {
  completed?: boolean;
}

export interface GetTodoList {
  readonly getList: (
    data?: Readonly<{ filters?: Filters }>
  ) => Promise<readonly TodoDpo[]>;
}
