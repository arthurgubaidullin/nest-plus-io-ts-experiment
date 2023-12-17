export interface NotFoundTodo {
  readonly _tag: 'NotFoundTodo';
}

export const createNotFoundTodo = (): NotFoundTodo => ({
  _tag: 'NotFoundTodo',
});
