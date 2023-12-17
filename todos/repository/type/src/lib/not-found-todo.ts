export class NotFoundTodo {
  public readonly _tag = 'NotFoundTodo';
}

export const createNotFoundTodo = (): NotFoundTodo => ({
  _tag: 'NotFoundTodo',
});
