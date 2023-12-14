import { CreateTodo } from './create-todo';
import { createTodoArb } from './create-todo-arb';
import fc from 'fast-check';

describe('create-todo-in-todos', () => {
  it('should create CreateTodo', () => {
    fc.assert(
      fc.property(createTodoArb, (createTodo) => CreateTodo.is(createTodo))
    );
  });

  it('should not create CreateTodo', () => {
    fc.assert(
      fc.property(fc.object(), (createTodo) => !CreateTodo.is(createTodo))
    );
  });

  it('should not create CreateTodo', () => {
    fc.assert(
      fc.property(fc.anything(), (createTodo) => !CreateTodo.is(createTodo))
    );
  });
});
