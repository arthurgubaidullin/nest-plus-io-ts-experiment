import { CreateTodo } from './create-todo';
import { GetTodoList } from './get-todos';

export type TodosRepository = CreateTodo & GetTodoList;
