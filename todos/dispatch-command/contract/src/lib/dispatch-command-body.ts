import * as t from 'io-ts';
import { TodosCommand } from './todos-command';

export type DispatchCommandBody = t.TypeOf<typeof DispatchCommandBody>;

export type EncodedDispatchCommandBody = t.OutputOf<typeof DispatchCommandBody>;

export const DispatchCommandBody = TodosCommand;
