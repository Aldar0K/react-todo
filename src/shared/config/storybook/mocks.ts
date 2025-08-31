// Mocks for Storybook to replace StoreProvider functionality

// Mock dispatch function
export const mockDispatch = jest.fn();

// Mock useAppDispatch hook
export const useAppDispatch = () => mockDispatch;

// Mock useAppSelector hook
export const useAppSelector = (selector: any) => {
  // Return mock data based on selector
  if (selector.name === 'getTodos') return [];
  if (selector.name === 'getTodoFilter') return 'all';
  if (selector.name === 'getActiveTodosCount') return 0;
  if (selector.name === 'getCompletedTodosCount') return 0;
  return undefined;
};

// Mock StoreProvider component
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Export all mocks
export const mocks = {
  useAppDispatch,
  useAppSelector,
  StoreProvider,
  mockDispatch,
};
