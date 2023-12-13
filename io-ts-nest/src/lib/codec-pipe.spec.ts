import * as t from 'io-ts';
import { CodecPipe } from './codec-pipe';
import { BadRequestException } from '@nestjs/common';

describe('io-ts-nest', () => {
  it('should create validation pipe for string codec', () => {
    const validationPipe = new CodecPipe(t.string);
    expect(validationPipe).toBeTruthy();
  });

  it('should decode data with codec', () => {
    const codec = t.type({ foo: t.literal('bar') });
    const data = { foo: 'bar' };
    const validationPipe = new CodecPipe(codec);
    expect(validationPipe.transform(data)).toEqual(data);
  });

  it('should fail to decode data with codec', () => {
    const codec = t.type({ foo: t.literal('bar') });
    const data = { foo: false };
    const validationPipe = new CodecPipe(codec);

    expect(() => validationPipe.transform(data)).toThrowError(
      BadRequestException
    );
  });
});
