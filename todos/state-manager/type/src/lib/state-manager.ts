import { RemoteData } from '@devexperts/remote-data-ts';
import { CreateTodoCommand } from '@nest-plus-io-ts-experiment/create-todo-contract-in-todos';
import { GetTodosResponse } from '@nest-plus-io-ts-experiment/get-todos-contract-in-todos';
import { FailedToGetTodos } from '@nest-plus-io-ts-experiment/server-api-type-in-todos';
import { NonEmptyString } from 'io-ts-types';

export interface UseTodos {
  readonly useTodos: () => RemoteData<FailedToGetTodos, GetTodosResponse>;
}

export interface GetTodos {
  readonly getTodos: () => Promise<void>;
}

export interface AddTodo {
  readonly addTodo: (dto: Omit<CreateTodoCommand, '_tag'>) => Promise<void>;
}

export interface ToggleTodo {
  readonly toggleTodo: (todoId: NonEmptyString) => Promise<void>;
}

export type TodosStateManager = UseTodos & GetTodos & AddTodo;
