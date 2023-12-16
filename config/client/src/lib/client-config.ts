import * as O from 'fp-ts/Option';
import { identity, pipe } from 'fp-ts/function';
import { createContext, useContext } from 'react';

interface Config {
  readonly host: string;
}

const ConfigContext = createContext<O.Option<Config>>(O.none);

export const ConfigProvider = ConfigContext.Provider;

export const useClientConfig = (): Config =>
  pipe(
    useContext(ConfigContext),
    O.fold(() => {
      throw new TypeError();
    }, identity)
  );
