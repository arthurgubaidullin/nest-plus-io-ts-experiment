import { DispatchCommand } from './dispatch-command';
import { GetTodoList } from './get-todo-list';

export type TodosService = DispatchCommand & GetTodoList;
