import { CreateTodoCommand } from '@nest-plus-io-ts-experiment/create-todo-command-in-todos';
import * as t from 'io-ts';

export interface Body extends t.TypeOf<typeof Body> {}

export type EncodedBody = t.OutputOf<typeof Body>;

export const Body = CreateTodoCommand;
