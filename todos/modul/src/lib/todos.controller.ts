import { TodosCommand } from '@nest-plus-io-ts-experiment/dispatch-command-contract-in-todos';
import {
  EncodedGetTodosResponse,
  GetTodosQuery,
  GetTodosResponse,
} from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { CodecPipe } from '@nest-plus-io-ts-experiment/io-ts-nest';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { absurd, pipe } from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';
import * as T from 'fp-ts/Task';

@Controller('todos')
export class TodosController {
  constructor(private readonly service: TodosService) {}

  @Post('commands')
  async dispatchCommand(
    @Body(new CodecPipe(TodosCommand)) data: TodosCommand
  ): Promise<void> {
    return pipe(
      async () => this.service.dispatchCommand(data),
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
    const todos = await this.service.getList(query);
    return GetTodosResponse.encode(todos);
  }
}
