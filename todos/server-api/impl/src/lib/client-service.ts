import { TodosServiceConfig } from '@nest-plus-io-ts-experiment/server-api-config-in-todos';
import { dispatchCommand } from '@nest-plus-io-ts-experiment/dispatch-command-via-fetch-in-todos';
import { getTodos } from '@nest-plus-io-ts-experiment/get-todos-via-fetch-in-todos';
import { TodosServerApi } from '@nest-plus-io-ts-experiment/server-api-type-in-todos';

export const getServerApi = (config: TodosServiceConfig): TodosServerApi => {
  return {
    dispatch: dispatchCommand(config),
    getList: () => getTodos(config),
  };
};
