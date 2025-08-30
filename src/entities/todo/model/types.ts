export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export interface TodosState {
  todos: Todo[];
  filter: TodoFilter;
}

export enum TodoFilter {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}
