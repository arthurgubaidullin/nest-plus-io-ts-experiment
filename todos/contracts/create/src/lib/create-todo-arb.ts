import fc from 'fast-check';
import { nonEmptyStringArb } from '@nest-plus-io-ts-experiment/non-empty-string-arb';

export const createTodoArb = fc.record({
  id: nonEmptyStringArb,
  content: nonEmptyStringArb,
});
