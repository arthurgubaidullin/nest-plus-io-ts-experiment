import { CreateTodo } from '@nest-plus-io-ts-experiment/create-todo-contract-in-todos';
import { TodoDto } from '@nest-plus-io-ts-experiment/todo-dto-in-todos';
import * as Todo from '@nest-plus-io-ts-experiment/todo-in-todos';
import { Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(private readonly repository: TodosRepository) {}

  async create(data: CreateTodo) {
    const todo = Todo.create(data);
    return this.repository.create(todo);
  }

  async getAll(): Promise<readonly TodoDto[]> {
    return this.repository.getAll();
  }
}
