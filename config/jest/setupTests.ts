import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

// Mock global variables
(global as any).__IS_DEV__ = true;
(global as any).__API_URL__ = 'http://localhost:8000';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  length: 0,
  key: jest.fn(),
};
(global as any).localStorage = localStorageMock;
