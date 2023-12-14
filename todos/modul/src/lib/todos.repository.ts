import * as Todo from '@nest-plus-io-ts-experiment/todo-in-todos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosRepository {
  private readonly todos: Todo.Todo[] = [];

  async create(todo: Todo.Todo): Promise<void> {
    this.todos.push(todo);
  }

  getAll(): readonly Todo.Todo[] {
    return this.todos;
  }
}
