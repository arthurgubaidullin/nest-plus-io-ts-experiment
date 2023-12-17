import {
  DispatchCommandBody,
  EncodedDispatchCommandResponse,
} from '@nest-plus-io-ts-experiment/dispatch-command-contract-in-todos';
import { dispatchCommandHandler } from '@nest-plus-io-ts-experiment/dispatch-command-http-handler-in-todos';
import {
  EncodedGetTodosResponse,
  GetTodosQuery,
} from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { getTodos } from '@nest-plus-io-ts-experiment/get-todos-http-handler';
import { CodecPipe } from '@nest-plus-io-ts-experiment/io-ts-nest';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TodosInMemoryRepository } from './todos.in-memory.repository';

@Controller('todos')
export class TodosController {
  constructor(private readonly repository: TodosInMemoryRepository) {}

  @Post('commands')
  async dispatchCommand(
    @Body(new CodecPipe(DispatchCommandBody)) data: DispatchCommandBody
  ): Promise<EncodedDispatchCommandResponse> {
    return dispatchCommandHandler(this.repository)(data);
  }

  @Get()
  async getAll(
    @Query(new CodecPipe(GetTodosQuery)) query: GetTodosQuery
  ): Promise<EncodedGetTodosResponse> {
    return getTodos(this.repository)(query);
  }
}
