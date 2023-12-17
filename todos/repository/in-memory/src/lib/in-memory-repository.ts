import {
  Filters,
  NotFoundTodo,
  TodosRepository,
  createNotFoundTodo,
  createTodoAlreadyExists,
} from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import { TodoDpo } from '@nest-plus-io-ts-experiment/todo-dpo-in-todos';
import * as A from 'fp-ts/Array';
import * as E from 'fp-ts/Either';
import * as O from 'fp-ts/Option';
import * as TE from 'fp-ts/TaskEither';
import { pipe } from 'fp-ts/function';
import { NonEmptyString } from 'io-ts-types';

export class TodosInMemoryRepository implements TodosRepository {
  private readonly todos: TodoDpo[] = [];

  public readonly create = (todo: TodoDpo) => async () => {
    if (this.todos.find((_todo) => _todo.id === todo.id)) {
      return E.left(createTodoAlreadyExists());
    }

    this.todos.push(todo);
    return E.right(void 0);
  };

  public readonly get =
    (todoId: NonEmptyString): TE.TaskEither<NotFoundTodo, TodoDpo> =>
    async () => {
      return pipe(
        this.todos,
        A.findFirst((a) => a.id === todoId),
        E.fromOption(createNotFoundTodo)
      );
    };

  public readonly update =
    (todo: TodoDpo): TE.TaskEither<NotFoundTodo, void> =>
    async () => {
      return pipe(
        this.todos,
        A.findIndex((a) => a.id === todo.id),
        O.map((i) => {
          this.todos[i] = todo;
        }),
        E.fromOption(createNotFoundTodo)
      );
    };

  public readonly getList =
    (
      data?: Readonly<{ filters?: Filters }>
    ): TE.TaskEither<never, readonly TodoDpo[]> =>
    async () => {
      let todos = this.todos;
      if (data?.filters?.completed) {
        todos = todos.filter((todo) => todo.state === 'COMPLETED');
      }
      return E.right(todos);
    };
}
