import { TodosCommand } from '@nest-plus-io-ts-experiment/command-in-todos';
import * as t from 'io-ts';

export type DispatchCommandBody = t.TypeOf<typeof DispatchCommandBody>;

export type EncodedDispatchCommandBody = t.OutputOf<typeof DispatchCommandBody>;

export const DispatchCommandBody = TodosCommand;
