import { useTodosServiceContext } from '@nest-plus-io-ts-experiment/client-service-context-in-todos';
import { NonEmptyString } from 'io-ts-types';

export const NewTodoForm = () => {
  const service = useTodosServiceContext();
  return (
    <>
      <h2>New todo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const fd = new FormData(e.currentTarget);

          service.dispatch({
            _tag: 'CreateTodo',
            content: fd.get('content') as NonEmptyString,
            createdAt: new Date(),
            id: crypto.randomUUID() as NonEmptyString,
          });
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
