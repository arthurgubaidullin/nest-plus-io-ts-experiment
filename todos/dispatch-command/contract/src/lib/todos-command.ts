import {
  ChangeTodoContentCommand,
  ChangeTodoStateCommand,
} from '@nest-plus-io-ts-experiment/change-todo-contract-in-todos';
import { CreateTodoCommand } from '@nest-plus-io-ts-experiment/create-todo-contract-in-todos';
import * as t from 'io-ts';

export type TodosCommand = t.TypeOf<typeof TodosCommand>;

export type EncodedTodosCommand = t.OutputOf<typeof TodosCommand>;

const withTag = <T extends string, C extends t.Mixed>(tag: T, codec: C) =>
  t.readonly(t.strict({ _tag: t.literal(tag), value: codec }));

export const TodosCommand = t.union([
  withTag('CreateTodo', CreateTodoCommand),
  withTag('ChangeTodoContent', ChangeTodoContentCommand),
  withTag('ChangeTodoState', ChangeTodoStateCommand),
]);
