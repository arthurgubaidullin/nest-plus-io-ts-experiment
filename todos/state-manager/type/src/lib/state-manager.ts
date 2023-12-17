import { TodoDto } from '@nest-plus-io-ts-experiment/todo-dto-in-todos';
import { NonEmptyString } from 'io-ts-types';

export interface GetTodos {
  readonly getTodos: () => Promise<void>;
}

export interface AddTodo {
  readonly addTodo: (dto: TodoDto) => Promise<void>;
}

export interface ToggleTodo {
  readonly toggleTodo: (todoId: NonEmptyString) => Promise<void>;
}

export type StateManagerApi = GetTodos & AddTodo & ToggleTodo;
