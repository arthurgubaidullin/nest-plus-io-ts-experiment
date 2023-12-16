import { TodosCommand } from '@nest-plus-io-ts-experiment/dispatch-command-contract-in-todos';
import { dispatchCommandHandler } from '@nest-plus-io-ts-experiment/dispatch-command-http-handler-in-todos';
import {
  EncodedGetTodosResponse,
  GetTodosQuery,
  GetTodosResponse,
} from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { getTodoLists } from '@nest-plus-io-ts-experiment/get-todos-in-todos';
import { CodecPipe } from '@nest-plus-io-ts-experiment/io-ts-nest';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TodosInMemoryRepository } from './todos.in-memory.repository';

@Controller('todos')
export class TodosController {
  constructor(private readonly repository: TodosInMemoryRepository) {}

  @Post('commands')
  async dispatchCommand(
    @Body(new CodecPipe(TodosCommand)) data: TodosCommand
  ): Promise<void> {
    return dispatchCommandHandler(this.repository)(data);
  }

  @Get()
  async getAll(
    @Query(new CodecPipe(GetTodosQuery)) query: GetTodosQuery
  ): Promise<EncodedGetTodosResponse> {
    const todos = await getTodoLists(this.repository)(query);
    return GetTodosResponse.encode(todos);
  }
}
