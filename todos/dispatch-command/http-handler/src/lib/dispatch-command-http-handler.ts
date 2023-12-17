import {
  DispatchCommandBody,
  DispatchCommandResponse,
  EncodedDispatchCommandResponse,
} from '@nest-plus-io-ts-experiment/dispatch-command-contract-in-todos';
import { dispatchCommand } from '@nest-plus-io-ts-experiment/dispatch-command-in-todos';
import {
  CreateTodo,
  GetTodo,
  UpdateTodo,
} from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import * as T from 'fp-ts/Task';
import * as TE from 'fp-ts/TaskEither';
import { absurd, pipe } from 'fp-ts/function';

export const dispatchCommandHandler =
  (repository: GetTodo & CreateTodo & UpdateTodo) =>
  (data: DispatchCommandBody): Promise<EncodedDispatchCommandResponse> => {
    return pipe(
      dispatchCommand(repository)(data),
      TE.fold(
        (e) => async () => {
          switch (e._tag) {
            case 'TodoAlreadyExists':
              throw new BadRequestException();
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
      T.map((data) => DispatchCommandResponse.encode({ ok: true, data })),
      (t) => t()
    );
  };
