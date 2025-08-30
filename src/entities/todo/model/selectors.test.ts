import { StateSchema } from 'app/providers/StoreProvider';
import {
  getActiveTodosCount,
  getCompletedTodosCount,
  getFilteredTodos,
  getTodoFilter,
  getTodos,
  hasCompletedTodos,
  hasTodos,
} from './selectors';
import { TodoFilter } from './types';

describe('todo selectors', () => {
  const mockState: DeepPartial<StateSchema> = {
    todos: {
      todos: [
        {
          id: '1',
          text: 'Active todo',
          completed: false,
          createdAt: Date.now(),
        },
        {
          id: '2',
          text: 'Completed todo',
          completed: true,
          createdAt: Date.now(),
        },
        {
          id: '3',
          text: 'Another active todo',
          completed: false,
          createdAt: Date.now(),
        },
      ],
      filter: TodoFilter.ALL,
    },
  };

  test('getTodos should return todos array', () => {
    const result = getTodos(mockState as StateSchema);
    expect(result).toHaveLength(3);
  });

  test('getTodoFilter should return current filter', () => {
    const result = getTodoFilter(mockState as StateSchema);
    expect(result).toBe(TodoFilter.ALL);
  });

  test('getFilteredTodos should return all todos when filter is ALL', () => {
    const result = getFilteredTodos(mockState as StateSchema);
    expect(result).toHaveLength(3);
  });

  test('getFilteredTodos should return only active todos when filter is ACTIVE', () => {
    const stateWithActiveFilter = {
      ...mockState,
      todos: {
        ...mockState.todos,
        filter: TodoFilter.ACTIVE,
      },
    };

    const result = getFilteredTodos(stateWithActiveFilter as StateSchema);
    expect(result).toHaveLength(2);
    expect(result.every((todo) => !todo.completed)).toBe(true);
  });

  test('getFilteredTodos should return only completed todos when filter is COMPLETED', () => {
    const stateWithCompletedFilter = {
      ...mockState,
      todos: {
        ...mockState.todos,
        filter: TodoFilter.COMPLETED,
      },
    };

    const result = getFilteredTodos(stateWithCompletedFilter as StateSchema);
    expect(result).toHaveLength(1);
    expect(result.every((todo) => todo.completed)).toBe(true);
  });

  test('getActiveTodosCount should return count of active todos', () => {
    const result = getActiveTodosCount(mockState as StateSchema);
    expect(result).toBe(2);
  });

  test('getCompletedTodosCount should return count of completed todos', () => {
    const result = getCompletedTodosCount(mockState as StateSchema);
    expect(result).toBe(1);
  });

  test('hasCompletedTodos should return true when there are completed todos', () => {
    const result = hasCompletedTodos(mockState as StateSchema);
    expect(result).toBe(true);
  });

  test('hasTodos should return true when there are todos', () => {
    const result = hasTodos(mockState as StateSchema);
    expect(result).toBe(true);
  });

  test('should return defaults for empty state', () => {
    const emptyState: DeepPartial<StateSchema> = {};

    expect(getTodos(emptyState as StateSchema)).toEqual([]);
    expect(getTodoFilter(emptyState as StateSchema)).toBe(TodoFilter.ALL);
    expect(getActiveTodosCount(emptyState as StateSchema)).toBe(0);
    expect(hasCompletedTodos(emptyState as StateSchema)).toBe(false);
    expect(hasTodos(emptyState as StateSchema)).toBe(false);
  });
});

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
