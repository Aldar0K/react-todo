import { todoActions, todoReducer } from './slice';
import { TodoFilter, TodosState } from './types';

describe('todoSlice', () => {
  const initialState: TodosState = {
    todos: [],
    filter: TodoFilter.ALL,
  };

  const mockTodo = {
    id: '1',
    text: 'Test todo',
    completed: false,
    createdAt: Date.now(),
  };

  test('should return initial state', () => {
    expect(todoReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('should add todo', () => {
    const action = todoActions.addTodo('Test todo');
    const state = todoReducer(initialState, action);

    expect(state.todos).toHaveLength(1);
    expect(state.todos[0].text).toBe('Test todo');
    expect(state.todos[0].completed).toBe(false);
    expect(state.todos[0].id).toBeDefined();
  });

  test('should toggle todo', () => {
    const stateWithTodo: TodosState = {
      ...initialState,
      todos: [mockTodo],
    };

    const action = todoActions.toggleTodo('1');
    const state = todoReducer(stateWithTodo, action);

    expect(state.todos[0].completed).toBe(true);
  });

  test('should delete todo', () => {
    const stateWithTodo: TodosState = {
      ...initialState,
      todos: [mockTodo],
    };

    const action = todoActions.deleteTodo('1');
    const state = todoReducer(stateWithTodo, action);

    expect(state.todos).toHaveLength(0);
  });

  test('should edit todo', () => {
    const stateWithTodo: TodosState = {
      ...initialState,
      todos: [mockTodo],
    };

    const action = todoActions.editTodo({ id: '1', text: 'Updated todo' });
    const state = todoReducer(stateWithTodo, action);

    expect(state.todos[0].text).toBe('Updated todo');
  });

  test('should set filter', () => {
    const action = todoActions.setFilter(TodoFilter.COMPLETED);
    const state = todoReducer(initialState, action);

    expect(state.filter).toBe(TodoFilter.COMPLETED);
  });

  test('should clear completed todos', () => {
    const stateWithTodos: TodosState = {
      ...initialState,
      todos: [
        { ...mockTodo, id: '1', completed: true },
        { ...mockTodo, id: '2', completed: false },
      ],
    };

    const action = todoActions.clearCompleted();
    const state = todoReducer(stateWithTodos, action);

    expect(state.todos).toHaveLength(1);
    expect(state.todos[0].id).toBe('2');
  });

  test('should toggle all todos', () => {
    const stateWithTodos: TodosState = {
      ...initialState,
      todos: [
        { ...mockTodo, id: '1', completed: false },
        { ...mockTodo, id: '2', completed: false },
      ],
    };

    const action = todoActions.toggleAllTodos();
    const state = todoReducer(stateWithTodos, action);

    expect(state.todos.every((todo) => todo.completed)).toBe(true);
  });

  test('should load todos', () => {
    const todos = [mockTodo];
    const action = todoActions.loadTodos(todos);
    const state = todoReducer(initialState, action);

    expect(state.todos).toEqual(todos);
  });
});
