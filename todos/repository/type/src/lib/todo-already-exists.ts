export interface TodoAlreadyExists {
  _tag: 'TodoAlreadyExists';
}

export const createTodoAlreadyExists = (): TodoAlreadyExists => ({
  _tag: 'TodoAlreadyExists',
});
