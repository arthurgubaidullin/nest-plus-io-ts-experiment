import { dispatchCommand } from '@nest-plus-io-ts-experiment/dispatch-command-via-fetch-in-todos';
import { getTodos } from '@nest-plus-io-ts-experiment/get-todos-via-fetch-in-todos';
import { TodosService } from '@nest-plus-io-ts-experiment/service-type-in-todos';

export const getService = (
  config: Readonly<{ host: string }>
): TodosService => {
  return {
    dispatch: dispatchCommand(config),
    getList: () => getTodos(config),
  };
};
