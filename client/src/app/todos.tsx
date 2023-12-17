import { fold3 } from '@devexperts/remote-data-ts';
import { useTodosStateManager } from '@nest-plus-io-ts-experiment/state-manager-context-in-todos';
import { pipe } from 'fp-ts/function';
import { useEffect } from 'react';
import { NewTodoForm } from './new-todo-form';

export const TodoList = () => {
  const { useTodos, getTodos, toggleTodo } = useTodosStateManager();
  const todos = useTodos();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return pipe(
    todos,
    fold3(
      () => <div>Loading…</div>,
      () => <div>Failure!11</div>,
      (todos) => (
        <div>
          <h1>Todos</h1>
          <br />
          <NewTodoForm />
          <br />
          <h2>List </h2>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  onChange={() => toggleTodo(todo.id)}
                  type="checkbox"
                  defaultChecked={todo.state === 'COMPLETED'}
                />{' '}
                {todo.content}
              </li>
            ))}
          </ul>
        </div>
      )
    )
  );
};
