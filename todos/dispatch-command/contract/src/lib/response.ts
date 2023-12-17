import { getResponseCodec } from '@nest-plus-io-ts-experiment/response-in-todos';
import * as t from 'io-ts';

export type DispatchCommandResponse = t.TypeOf<typeof DispatchCommandResponse>;

export type EncodedDispatchCommandResponse = t.OutputOf<
  typeof DispatchCommandResponse
>;

export const DispatchCommandResponse = getResponseCodec(t.null);
