import { createTodo } from '@nest-plus-io-ts-experiment/create-todo-in-todos';
import { getTodoLists } from '@nest-plus-io-ts-experiment/get-todos-in-todos';
import { Injectable } from '@nestjs/common';
import { TodosInMemoryRepository } from './todos.in-memory.repository';

@Injectable()
export class TodosService {
  constructor(private readonly repository: TodosInMemoryRepository) {}

  public readonly create = createTodo(this.repository);

  public readonly getList = getTodoLists(this.repository);
}
