import { CreateTodo } from './create-todo';
import { UpdateTodo } from './update-todo';
import { GetTodo } from './get-todo';
import { GetTodoList } from './get-todo-list';

export type TodosRepository = CreateTodo & GetTodo & UpdateTodo & GetTodoList;
