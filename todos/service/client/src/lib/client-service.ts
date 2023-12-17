import { TodosServiceConfig } from '@nest-plus-io-ts-experiment/client-service-config-in-todos';
import { dispatchCommand } from '@nest-plus-io-ts-experiment/dispatch-command-via-fetch-in-todos';
import { getTodos } from '@nest-plus-io-ts-experiment/get-todos-via-fetch-in-todos';
import { TodosService } from '@nest-plus-io-ts-experiment/service-type-in-todos';

export const getService = (config: TodosServiceConfig): TodosService => {
  return {
    dispatch: dispatchCommand(config),
    getList: () => getTodos(config),
  };
};