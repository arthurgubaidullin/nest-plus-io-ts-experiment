import { CreateTodo } from './create-todo';
import { GetAllTodos } from './get-all-todos';

export type TodosRepository = CreateTodo & GetAllTodos;
