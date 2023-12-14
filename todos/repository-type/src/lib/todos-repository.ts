import { CreateTodo } from './create-todo';
import { GetTodos } from './get-all-todos';

export type TodosRepository = CreateTodo & GetTodos;
