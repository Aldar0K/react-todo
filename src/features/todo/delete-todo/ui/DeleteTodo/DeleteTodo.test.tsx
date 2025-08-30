import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { DeleteTodo } from './DeleteTodo';

const mockDispatch = jest.fn();

jest.mock('app/providers/StoreProvider', () => ({
  useAppDispatch: () => mockDispatch,
}));

describe('DeleteTodo', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  test('should render delete button', () => {
    componentRender(<DeleteTodo id="1" />);

    const button = screen.getByRole('button', { name: 'Delete todo' });
    expect(button).toBeInTheDocument();
  });

  test('should dispatch deleteTodo action on click', () => {
    componentRender(<DeleteTodo id="test-id" />);

    const button = screen.getByRole('button', { name: 'Delete todo' });
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'todos/deleteTodo',
      payload: 'test-id',
    });
  });

  test('should have correct aria-label', () => {
    componentRender(<DeleteTodo id="1" />);

    const button = screen.getByRole('button', { name: 'Delete todo' });
    expect(button).toHaveAttribute('aria-label', 'Delete todo');
  });
});
