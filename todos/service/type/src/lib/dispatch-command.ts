import { TodosCommand } from '@nest-plus-io-ts-experiment/dispatch-command-contract-in-todos';
import { TaskEither } from 'fp-ts/TaskEither';

export interface DispatchCommand {
  readonly dispatch: (command: TodosCommand) => TaskEither<never, void>;
}
