export class FailedToDispatchCommand {
  public readonly _tag = 'FailedToDispatchCommand' as const;

  constructor(public readonly cause: Error) {}
}
