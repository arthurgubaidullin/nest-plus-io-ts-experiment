import * as RD from '@devexperts/remote-data-ts';
import { useTodosServiceContext } from '@nest-plus-io-ts-experiment/client-service-context-in-todos';
import { GetTodosResponse } from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { FailedToGetTodos } from '@nest-plus-io-ts-experiment/service-type-in-todos';
import { pipe } from 'fp-ts/function';
import * as T from 'fp-ts/Task';
import * as TE from 'fp-ts/TaskEither';
import { useEffect, useState } from 'react';

export function useTodos() {
  const service = useTodosServiceContext();
  const [state, setState] = useState<
    RD.RemoteData<FailedToGetTodos, GetTodosResponse>
  >(RD.initial);

  useEffect(() => {
    pipe(
      TE.fromIO(() => setState(RD.pending)),
      TE.chainW(() => service.getList()),
      TE.map(
        (a) =>
          RD.success(a) as RD.RemoteData<FailedToGetTodos, GetTodosResponse>
      ),
      TE.mapLeft(
        (e) =>
          RD.failure(e) as RD.RemoteData<FailedToGetTodos, GetTodosResponse>
      ),
      TE.foldW(T.of, T.of),
      T.chain((a) =>
        T.fromIO(() => {
          setState(a);
        })
      ),
      (t) => t()
    );
  }, []);

  return state;
}
