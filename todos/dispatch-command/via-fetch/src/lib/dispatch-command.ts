import {
  DispatchCommandBody,
  DispatchCommandResponse,
} from '@nest-plus-io-ts-experiment/dispatch-command-contract-in-todos';
import { FailedToDispatchCommand } from '@nest-plus-io-ts-experiment/server-api-type-in-todos';
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import * as T from 'fp-ts/Task';
import { TaskEither } from 'fp-ts/TaskEither';
import { constVoid, pipe } from 'fp-ts/function';
import { failure } from 'io-ts/PathReporter';

export const dispatchCommand =
  (config: Readonly<{ host: string }>) =>
  (data: DispatchCommandBody): TaskEither<FailedToDispatchCommand, void> =>
    pipe(
      async () =>
        fetch(`${config.host}/api/todos/commands`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(DispatchCommandBody.encode(data)),
        }),
      T.chain((resp) => async (): Promise<unknown> => resp.json()),
      (f) => TE.tryCatch(f, E.toError),
      TE.chainEitherKW((data) =>
        pipe(data, DispatchCommandResponse.decode, E.mapLeft(failure))
      ),
      TE.tapError((e) =>
        TE.fromIO(() => {
          console.error(e);
        })
      ),
      TE.mapLeft((e) => new FailedToDispatchCommand(E.toError(e))),
      TE.map(constVoid)
    );
