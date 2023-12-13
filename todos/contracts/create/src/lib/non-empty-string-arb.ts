import fc from 'fast-check';
import { NonEmptyString } from 'io-ts-types';

export const nonEmptyStringArb: fc.Arbitrary<NonEmptyString> = fc.string({
  minLength: 1,
}) as fc.Arbitrary<NonEmptyString>;
