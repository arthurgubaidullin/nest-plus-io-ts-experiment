import { TodoDtoList } from '@nest-plus-io-ts-experiment/todo-dto-in-todos';
import * as t from 'io-ts';

export type GetTodosResponse = t.TypeOf<typeof GetTodosResponse>;

export type EncodedGetTodosResponse = t.OutputOf<typeof GetTodosResponse>;

export const GetTodosResponse = TodoDtoList;
