import { CreateTodo } from './create-todo';
import { GetTodoList } from './get-todo-list';

export type TodosRepository = CreateTodo & GetTodoList;
