import { createTodo } from '@nest-plus-io-ts-experiment/create-todo-in-todos';
import { TodoDto } from '@nest-plus-io-ts-experiment/todo-dto-in-todos';
import { Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(private readonly repository: TodosRepository) {}

  public readonly create = createTodo(this.repository);

  async getAll(): Promise<readonly TodoDto[]> {
    return await this.repository.getAll();
  }
}
