import { DispatchCommandBody } from '@nest-plus-io-ts-experiment/dispatch-command-contract-in-todos';
import { TaskEither } from 'fp-ts/TaskEither';
import { FailedToDispatchCommand } from './failed-to-dispatch-command';

export interface DispatchCommand {
  readonly dispatch: (
    command: DispatchCommandBody
  ) => TaskEither<FailedToDispatchCommand, void>;
}
