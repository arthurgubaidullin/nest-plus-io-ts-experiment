import { createTodoCommandInTodos } from './create-todo-command-in-todos';

describe('createTodoCommandInTodos', () => {
  it('should work', () => {
    expect(createTodoCommandInTodos()).toEqual('create-todo-command-in-todos');
  });
});
