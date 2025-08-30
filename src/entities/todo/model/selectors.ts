import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

import { TodoFilter } from './types';

export const getTodos = (state: StateSchema) => state.todos?.todos || [];
export const getTodoFilter = (state: StateSchema) => state.todos?.filter || TodoFilter.ALL;

export const getFilteredTodos = createSelector(
  [getTodos, getTodoFilter],
  (todos, filter) => {
    switch (filter) {
      case TodoFilter.ACTIVE:
        return todos.filter((todo) => !todo.completed);
      case TodoFilter.COMPLETED:
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  },
);

export const getActiveTodosCount = createSelector(
  [getTodos],
  (todos) => todos.filter((todo) => !todo.completed).length,
);

export const getCompletedTodosCount = createSelector(
  [getTodos],
  (todos) => todos.filter((todo) => todo.completed).length,
);

export const hasCompletedTodos = createSelector(
  [getCompletedTodosCount],
  (count) => count > 0,
);

export const hasTodos = createSelector(
  [getTodos],
  (todos) => todos.length > 0,
);
