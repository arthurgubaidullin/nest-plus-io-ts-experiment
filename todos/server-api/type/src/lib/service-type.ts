import { DispatchCommand } from './dispatch-command';
import { GetTodoList } from './get-todo-list';

export type TodosServerApi = DispatchCommand & GetTodoList;
