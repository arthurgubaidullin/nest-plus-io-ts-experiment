import fc from 'fast-check';
import { nonEmptyStringArb } from './non-empty-string-arb';

export const createTodoArb = fc.record({
  id: nonEmptyStringArb,
  content: nonEmptyStringArb,
});
