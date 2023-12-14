import fc from 'fast-check';
import { CreateTodoCommand } from './create-todo';
import { createTodoArb } from './create-todo-arb';

describe('create-todo-in-todos', () => {
  it('should create CreateTodo', () => {
    fc.assert(
      fc.property(createTodoArb, (createTodo) =>
        CreateTodoCommand.is(createTodo)
      )
    );
  });

  it('should not create CreateTodo', () => {
    fc.assert(
      fc.property(
        fc.object(),
        (createTodo) => !CreateTodoCommand.is(createTodo)
      )
    );
  });

  it('should not create CreateTodo', () => {
    fc.assert(
      fc.property(
        fc.anything(),
        (createTodo) => !CreateTodoCommand.is(createTodo)
      )
    );
  });
});
