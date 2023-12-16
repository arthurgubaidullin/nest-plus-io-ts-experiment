import { CreateTodoCommand } from '@nest-plus-io-ts-experiment/create-todo-contract-in-todos';
import {
  EncodedGetTodosResponse,
  GetTodosQuery,
  GetTodosResponse,
} from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { CodecPipe } from '@nest-plus-io-ts-experiment/io-ts-nest';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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
  async getAll(
    @Query(new CodecPipe(GetTodosQuery)) query: GetTodosQuery
  ): Promise<EncodedGetTodosResponse> {
    const todos = await this.service.getList(query);
    return GetTodosResponse.encode(todos);
  }
}
