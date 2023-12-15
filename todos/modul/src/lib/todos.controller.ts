import { CreateTodoCommand } from '@nest-plus-io-ts-experiment/create-todo-contract-in-todos';
import { CodecPipe } from '@nest-plus-io-ts-experiment/io-ts-nest';
import { TodoDto } from '@nest-plus-io-ts-experiment/todo-dto-in-todos';
import { Body, Controller, Get, Post } from '@nestjs/common';
import * as RA from 'fp-ts/ReadonlyArray';
import { pipe } from 'fp-ts/function';
import { OutputOf } from 'io-ts';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly service: TodosService) {}

  @Post()
  async create(
    @Body(new CodecPipe(CreateTodoCommand)) data: CreateTodoCommand
  ): Promise<void> {
    return this.service.create(data);
  }

  @Get()
  async getAll(): Promise<readonly OutputOf<typeof TodoDto>[]> {
    const todos = await this.service.getList();
    return pipe(todos, RA.map(TodoDto.encode));
  }
}
