import {
  Filters,
  TodosRepository,
} from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosInMemoryRepository implements TodosRepository {
  private readonly todos: TodoDpo[] = [];

  async create(todo: TodoDpo): Promise<void> {
    this.todos.push(todo);
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
