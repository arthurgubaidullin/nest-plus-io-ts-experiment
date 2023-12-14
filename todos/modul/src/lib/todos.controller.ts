import { CreateTodoCommand } from '@nest-plus-io-ts-experiment/create-todo-contract-in-todos';
import { CodecPipe } from '@nest-plus-io-ts-experiment/io-ts-nest';
import { TodoDto } from '@nest-plus-io-ts-experiment/todo-dto-in-todos';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly service: TodosService) {}

  @Post()
  async create(
    @Body(new CodecPipe(CreateTodoCommand)) data: CreateTodoCommand
  ) {
    return this.service.create(data);
  }

  @Get()
  async getAll(): Promise<readonly TodoDto[]> {
    return this.service.getList();
  }
}
