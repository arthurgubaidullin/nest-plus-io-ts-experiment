import fc from 'fast-check';
import { NonEmptyString } from 'io-ts-types';

export const nonEmptyStringArb = fc.string().filter(NonEmptyString.is);
