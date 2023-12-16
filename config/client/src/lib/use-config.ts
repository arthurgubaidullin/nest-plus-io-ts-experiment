import * as O from 'fp-ts/Option';
import { identity, pipe } from 'fp-ts/function';
import { useContext } from 'react';
import { Config } from './config';
import { ConfigContext } from './config-context';

export const useConfig = (): Config =>
  pipe(
    useContext(ConfigContext),
    O.fold(() => {
      throw new TypeError();
    }, identity)
  );
