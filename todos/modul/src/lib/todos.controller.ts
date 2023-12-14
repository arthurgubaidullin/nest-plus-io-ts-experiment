import { CodecPipe } from '@nest-plus-io-ts-experiment/io-ts-nest';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodo } from '@nest-plus-io-ts-experiment/create-todo-contract-in-todos';
import { TodosRepository } from './todos.repository';
import { TodoDto } from '@nest-plus-io-ts-experiment/todo-dto-in-todos';

@Controller('todos')
export class TodosController {
  constructor(private readonly repository: TodosRepository) {}

  @Post()
  async create(@Body(new CodecPipe(CreateTodo)) data: CreateTodo) {
    return this.repository.create(data);
  }

  @Get()
  async getAll(): Promise<readonly TodoDto[]> {
    return this.repository.getAll();
  }
}
