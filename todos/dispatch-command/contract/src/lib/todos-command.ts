import {
  ChangeTodoContentCommand,
  ChangeTodoStateCommand,
} from '@nest-plus-io-ts-experiment/change-todo-command-in-todos';
import { CreateTodoCommand } from '@nest-plus-io-ts-experiment/create-todo-command-in-todos';
import * as t from 'io-ts';

export type TodosCommand = t.TypeOf<typeof TodosCommand>;

export type EncodedTodosCommand = t.OutputOf<typeof TodosCommand>;

export const TodosCommand = t.union(
  [CreateTodoCommand, ChangeTodoContentCommand, ChangeTodoStateCommand],
  'TodosCommand'
);
