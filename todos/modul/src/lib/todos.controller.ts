import { TodosCommand } from '@nest-plus-io-ts-experiment/dispatch-command-contract-in-todos';
import { dispatchCommand } from '@nest-plus-io-ts-experiment/dispatch-command-in-todos';
import {
  EncodedGetTodosResponse,
  GetTodosQuery,
  GetTodosResponse,
} from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { getTodoLists } from '@nest-plus-io-ts-experiment/get-todos-in-todos';
import { CodecPipe } from '@nest-plus-io-ts-experiment/io-ts-nest';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Query,
} from '@nestjs/common';
import * as T from 'fp-ts/Task';
import * as TE from 'fp-ts/TaskEither';
import { absurd, pipe } from 'fp-ts/function';
import { TodosInMemoryRepository } from './todos.in-memory.repository';

@Controller('todos')
export class TodosController {
  constructor(private readonly repository: TodosInMemoryRepository) {}

  @Post('commands')
  async dispatchCommand(
    @Body(new CodecPipe(TodosCommand)) data: TodosCommand
  ): Promise<void> {
    return pipe(
      async () => dispatchCommand(this.repository)(data),
      TE.fold(
        (e) => async () => {
          switch (e._tag) {
            case 'NotFoundTodo':
              throw new NotFoundException();
            case 'InvalidState':
              throw new BadRequestException();
            case 'InvalidUpdatedAt':
              throw new BadRequestException();

            default:
              absurd(e);
              break;
          }
        },
        T.of
      ),
      (t) => t()
    );
  }

  @Get()
  async getAll(
    @Query(new CodecPipe(GetTodosQuery)) query: GetTodosQuery
  ): Promise<EncodedGetTodosResponse> {
    const todos = await getTodoLists(this.repository)(query);
    return GetTodosResponse.encode(todos);
  }
}
