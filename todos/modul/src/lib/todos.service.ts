import * as Todo from '@nest-plus-io-ts-experiment/todo-in-todos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  private readonly todos: Todo.Todo[] = [];

  create(todo: Todo.Todo): void {
    this.todos.push(todo);
  }

  getAll(): readonly Todo.Todo[] {
    return this.todos;
  }
}
