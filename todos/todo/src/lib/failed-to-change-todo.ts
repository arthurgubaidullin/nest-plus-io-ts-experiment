import { InvalidState } from './invalid-state';
import { InvalidUpdatedAt } from './invalid-updated-at';

export type FailedToChangeTodo = InvalidState | InvalidUpdatedAt;
