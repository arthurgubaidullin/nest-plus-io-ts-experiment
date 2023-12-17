import fc from 'fast-check';
import { nonEmptyStringArb } from '@nest-plus-io-ts-experiment/non-empty-string-arb';

export const createTodoArb = fc.record({
  _tag: fc.constant('CreateTodo'),
  id: nonEmptyStringArb,
  content: nonEmptyStringArb,
  createdAt: fc.date(),
});
