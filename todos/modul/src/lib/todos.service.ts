import { Injectable } from '@nestjs/common';
import { CreateTodo } from '@nest-plus-io-ts-experiment/create-todo-contract-in-todos';
import * as Todo from '@nest-plus-io-ts-experiment/todo-in-todos';
import * as TodoDto from '@nest-plus-io-ts-experiment/todo-dto-in-todos';

@Injectable()
export class TodosService {
  private readonly todos: Todo.Todo[] = [];

  create(data: CreateTodo): void {
    const todo = Todo.create(data);
    this.todos.push(todo);
  }

  getAll(): readonly TodoDto.TodoDto[] {
    return this.todos;
  }
}
