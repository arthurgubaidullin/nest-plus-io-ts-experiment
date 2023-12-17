import { DispatchCommandBody } from '@nest-plus-io-ts-experiment/dispatch-command-contract-in-todos';
import { FailedToDispatchCommand } from '@nest-plus-io-ts-experiment/server-api-type-in-todos';
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import { TaskEither } from 'fp-ts/TaskEither';
import { constVoid, pipe } from 'fp-ts/function';

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
      (f) => TE.tryCatch(f, E.toError),
      TE.tapError((e) =>
        TE.fromIO(() => {
          console.error(e);
        })
      ),
      TE.mapLeft((e) => new FailedToDispatchCommand(e)),
      TE.map(constVoid)
    );
