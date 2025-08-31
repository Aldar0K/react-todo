import { configureStore } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { todoReducer } from 'entities/todo';

export const withStoreDecorator = (initialState?: any): Decorator => (Story) => {
  // Create a simple store with the correct structure
  const store = configureStore({
    reducer: {
      todos: todoReducer,
    } as any, // Use any to bypass TypeScript strict checking
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: false,
  });

  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};
