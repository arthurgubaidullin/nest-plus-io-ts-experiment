import * as O from 'fp-ts/Option';
import { createContext } from 'react';
import { Config } from './config';

export const ConfigContext = createContext<O.Option<Config>>(O.none);
