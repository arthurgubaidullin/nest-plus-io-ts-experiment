import { TodoDtoList } from '@nest-plus-io-ts-experiment/todo-dto-in-todos';
import { OutputOf, TypeOf } from 'io-ts';

export type GetTodosResponse = TypeOf<typeof GetTodosResponse>;

export type EncodedGetTodosResponse = OutputOf<typeof GetTodosResponse>;

export const GetTodosResponse = TodoDtoList;
