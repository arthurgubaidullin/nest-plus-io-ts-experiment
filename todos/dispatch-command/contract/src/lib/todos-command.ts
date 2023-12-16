import {
  ChangeTodoContentCommand,
  ChangeTodoStateCommand,
} from '@nest-plus-io-ts-experiment/change-todo-contract-in-todos';
import { CreateTodoCommand } from '@nest-plus-io-ts-experiment/create-todo-contract-in-todos';
import * as t from 'io-ts';

export type TodosCommands = t.TypeOf<typeof TodosCommands>;

export type EncodedTodosCommands = t.OutputOf<typeof TodosCommands>;

const withTag = <T extends string, C extends t.Mixed>(tag: T, codec: C) =>
  t.readonly(t.strict({ _tag: t.literal(tag), value: codec }));

export const TodosCommands = t.union([
  withTag('CreateTodo', CreateTodoCommand),
  withTag('ChangeTodoContent', ChangeTodoContentCommand),
  withTag('ChangeTodoState', ChangeTodoStateCommand),
]);
