import { jest } from '@storybook/jest';
import type { ReactNode } from 'react';

// Mock dispatch function
export const mockDispatch = jest.fn();

export const useAppSelector = (selector: any) => {
  // Return mock data based on selector
  if (selector.name === 'getTodos') return [];
  if (selector.name === 'getTodoFilter') return 'all';
  if (selector.name === 'getActiveTodosCount') return 0;
  if (selector.name === 'getCompletedTodosCount') return 0;
  return undefined;
};

export const useAppDispatch = () => mockDispatch;

export const StoreProvider = ({ children }: { children: ReactNode }) => children;

export const mocks = {
  useAppDispatch,
  useAppSelector,
  StoreProvider,
  mockDispatch,
};
