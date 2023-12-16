export enum State {
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
}
export type StateSimplified = 'IN_PROGRESS' | 'COMPLETED';

export const lift = (state: StateSimplified) =>
  state === State.InProgress ? State.InProgress : State.Completed;
