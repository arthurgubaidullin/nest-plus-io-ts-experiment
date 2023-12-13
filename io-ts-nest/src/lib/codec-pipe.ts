import { BadRequestException, PipeTransform } from '@nestjs/common';
import { identity, pipe } from 'fp-ts/function';
import * as E from 'fp-ts/Either';
import * as t from 'io-ts';
import { failure } from 'io-ts/PathReporter';

export class CodecPipe<C extends t.Mixed> implements PipeTransform {
  constructor(private schema: C) {}

  transform(value: unknown): t.TypeOf<C> {
    return pipe(
      this.schema.decode(value),
      E.mapLeft(failure),
      E.fold((errors) => {
        throw new BadRequestException('Validation failed', { cause: errors });
      }, identity)
    );
  }
}
