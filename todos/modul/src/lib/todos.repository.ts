import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosRepository {
  private readonly todos: TodoDpo[] = [];

  async create(todo: TodoDpo): Promise<void> {
    this.todos.push(todo);
  }

  async getAll(): Promise<readonly TodoDpo[]> {
    return this.todos;
  }
}
