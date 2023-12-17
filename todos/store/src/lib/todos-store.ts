import * as RD from '@devexperts/remote-data-ts';
import { GetTodosResponse } from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { FailedToGetTodos } from '@nest-plus-io-ts-experiment/service-type-in-todos';
import { create } from 'zustand';

export interface TodosStoreApi {
  readonly todos: RD.RemoteData<FailedToGetTodos, GetTodosResponse>;
  readonly pending: () => void;
  readonly success: (a: GetTodosResponse) => void;
  readonly failure: (e: FailedToGetTodos) => void;
}

export const useTodosStore = create<TodosStoreApi>((set) => ({
  todos: RD.initial,
  pending: () => set({ todos: RD.pending }),
  success: (a) => set({ todos: RD.success(a) }),
  failure: (e) => set({ todos: RD.failure(e) }),
}));
