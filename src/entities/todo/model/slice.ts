import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Todo, TodoFilter, TodosState } from './types';

const initialState: TodosState = {
  todos: [],
  filter: TodoFilter.ALL,
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.payload.trim(),
        completed: false,
        createdAt: Date.now(),
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text.trim();
      }
    },
    setFilter: (state, action: PayloadAction<TodoFilter>) => {
      state.filter = action.payload;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((t) => !t.completed);
    },
    toggleAllTodos: (state) => {
      const allCompleted = state.todos.every((t) => t.completed);
      state.todos.forEach((t) => {
        t.completed = !allCompleted;
      });
    },
    loadTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
  },
});

export const { actions: todoActions } = todoSlice;
export const { reducer: todoReducer } = todoSlice;
