import * as RD from '@devexperts/remote-data-ts';
import { useConfig } from '@nest-plus-io-ts-experiment/client-config';
import { GetTodosResponse } from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { getTodos } from '@nest-plus-io-ts-experiment/get-todos-via-fetch-in-todos';
import { FailedToGetTodos } from '@nest-plus-io-ts-experiment/service-type-in-todos';
import { pipe } from 'fp-ts/function';
import * as T from 'fp-ts/Task';
import * as TE from 'fp-ts/TaskEither';
import { useEffect, useState } from 'react';

export function useTodos() {
  const config = useConfig();
  const [state, setState] = useState<
    RD.RemoteData<FailedToGetTodos, GetTodosResponse>
  >(RD.initial);

  useEffect(() => {
    pipe(
      T.fromIO(() => setState(RD.pending)),
      T.chain(() => getTodos(config)),
      TE.bimap(RD.failure, RD.success),
      TE.fold(
        (e) =>
          T.fromIO(() => {
            setState(e);
          }),
        (a) =>
          T.fromIO(() => {
            setState(a);
          })
      ),
      (t) => t()
    );
  }, []);

  return state;
}
