import { CreateTodo } from './create-todo';
import { GetTodos } from './get-todos';

export type TodosRepository = CreateTodo & GetTodos;
