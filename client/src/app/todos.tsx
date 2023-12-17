import { fold3 } from '@devexperts/remote-data-ts';
import { useTodos } from '@nest-plus-io-ts-experiment/use-todos-in-todos';
import { pipe } from 'fp-ts/function';
import { NewTodoForm } from './new-todo-form';

export const TodoList = () => {
  const todos = useTodos();
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
