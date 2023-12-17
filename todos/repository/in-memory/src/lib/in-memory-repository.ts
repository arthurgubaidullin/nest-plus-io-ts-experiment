import {
  Filters,
  TodosRepository,
} from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';
import * as A from 'fp-ts/Array';
import * as O from 'fp-ts/Option';
import { constVoid, pipe } from 'fp-ts/function';
import { NonEmptyString } from 'io-ts-types';

export class TodosInMemoryRepository implements TodosRepository {
  private readonly todos: TodoDpo[] = [];

  async create(todo: TodoDpo): Promise<void> {
    this.todos.push(todo);
  }

  async get(todoId: NonEmptyString): Promise<O.Option<TodoDpo>> {
    return pipe(
      this.todos,
      A.findFirst((a) => a.id === todoId)
    );
  }

  async update(todo: TodoDpo): Promise<void> {
    return pipe(
      this.todos,
      A.findIndex((a) => a.id === todo.id),
      O.map((i) => {
        this.todos[i] = todo;
      }),
      O.getOrElse(constVoid)
    );
  }

  async getList(
    data?: Readonly<{ filters?: Filters }>
  ): Promise<readonly TodoDpo[]> {
    let todos = this.todos;
    if (data?.filters?.completed) {
      todos = todos.filter((todo) => todo.state === 'COMPLETED');
    }
    return todos;
  }
}
