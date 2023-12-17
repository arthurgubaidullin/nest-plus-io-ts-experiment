import { TodosCommand } from '@nest-plus-io-ts-experiment/dispatch-command-contract-in-todos';
import { FailedToDispatchCommand } from '@nest-plus-io-ts-experiment/service-type-in-todos';
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import { TaskEither } from 'fp-ts/TaskEither';
import { constVoid, pipe } from 'fp-ts/function';

export const dispatchCommand =
  (config: Readonly<{ host: string }>) =>
  (data: TodosCommand): TaskEither<FailedToDispatchCommand, void> =>
    pipe(
      async () =>
        fetch(`${config.host}/api/todos/commands`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(TodosCommand.encode(data)),
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
