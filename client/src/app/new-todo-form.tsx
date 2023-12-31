import { useTodosStateManager } from '@nest-plus-io-ts-experiment/state-manager-context-in-todos';
import { NonEmptyString } from 'io-ts-types';

export const NewTodoForm = () => {
  const { addTodo } = useTodosStateManager();
  return (
    <>
      <h2>New todo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const fd = new FormData(e.currentTarget);

          const command = {
            _tag: 'CreateTodo' as const,
            content: fd.get('content') as NonEmptyString,
            createdAt: new Date(),
            id: crypto.randomUUID() as NonEmptyString,
          };

          addTodo(command);
        }}
      >
        <label>
          Todo: <input type="text" name="content" required />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};
