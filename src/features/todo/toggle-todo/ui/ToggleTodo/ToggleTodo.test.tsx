import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { ToggleTodo } from './ToggleTodo';

const mockDispatch = jest.fn();

jest.mock('app/providers/StoreProvider', () => ({
  useAppDispatch: () => mockDispatch,
}));

describe('ToggleTodo', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  test('should render checkbox with correct state', () => {
    componentRender(<ToggleTodo id="1" completed={false} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('should render checked checkbox when completed', () => {
    componentRender(<ToggleTodo id="1" completed />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('should dispatch toggleTodo action on click', () => {
    componentRender(<ToggleTodo id="test-id" completed={false} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'todos/toggleTodo',
      payload: 'test-id',
    });
  });

  test('should have correct id attribute', () => {
    componentRender(<ToggleTodo id="test-id" completed={false} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('id', 'todo-test-id');
  });
});
