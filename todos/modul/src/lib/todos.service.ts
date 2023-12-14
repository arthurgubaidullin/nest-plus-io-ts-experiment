import { createTodo } from '@nest-plus-io-ts-experiment/create-todo-in-todos';
import { TodoDto } from '@nest-plus-io-ts-experiment/todo-dto-in-todos';
import { Injectable } from '@nestjs/common';
import { TodosInMemoryRepository } from './todos.in-memory.repository';

@Injectable()
export class TodosService {
  constructor(private readonly repository: TodosInMemoryRepository) {}

  public readonly create = createTodo(this.repository);

  async getList(): Promise<readonly TodoDto[]> {
    return await this.repository.getList();
  }
}
