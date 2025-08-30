import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { EditTodo } from './EditTodo';

const mockDispatch = jest.fn();
const mockOnSave = jest.fn();
const mockOnCancel = jest.fn();

jest.mock('app/providers/StoreProvider', () => ({
  useAppDispatch: () => mockDispatch,
}));

describe('EditTodo', () => {
  const defaultProps = {
    id: 'test-id',
    text: 'Test todo',
    onSave: mockOnSave,
    onCancel: mockOnCancel,
  };

  beforeEach(() => {
    mockDispatch.mockClear();
    mockOnSave.mockClear();
    mockOnCancel.mockClear();
  });

  test('should render input with initial text', () => {
    componentRender(<EditTodo {...defaultProps} />);

    const input = screen.getByDisplayValue('Test todo');
    expect(input).toBeInTheDocument();
  });

  test('should save on Enter key press', () => {
    componentRender(<EditTodo {...defaultProps} />);

    const input = screen.getByDisplayValue('Test todo');
    fireEvent.change(input, { target: { value: 'Updated todo' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'todos/editTodo',
      payload: { id: 'test-id', text: 'Updated todo' },
    });
    expect(mockOnSave).toHaveBeenCalled();
  });

  test('should cancel on Escape key press', () => {
    componentRender(<EditTodo {...defaultProps} />);

    const input = screen.getByDisplayValue('Test todo');
    fireEvent.change(input, { target: { value: 'Updated todo' } });
    fireEvent.keyDown(input, { key: 'Escape' });

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(mockOnCancel).toHaveBeenCalled();
    expect(input).toHaveValue('Test todo'); // Should reset to original text
  });

  test('should save on blur', () => {
    componentRender(<EditTodo {...defaultProps} />);

    const input = screen.getByDisplayValue('Test todo');
    fireEvent.change(input, { target: { value: 'Updated todo' } });
    fireEvent.blur(input);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'todos/editTodo',
      payload: { id: 'test-id', text: 'Updated todo' },
    });
    expect(mockOnSave).toHaveBeenCalled();
  });

  test('should delete todo if text is empty', () => {
    componentRender(<EditTodo {...defaultProps} />);

    const input = screen.getByDisplayValue('Test todo');
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'todos/deleteTodo',
      payload: 'test-id',
    });
    expect(mockOnSave).toHaveBeenCalled();
  });

  test('should update input value on change', () => {
    componentRender(<EditTodo {...defaultProps} />);

    const input = screen.getByDisplayValue('Test todo') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'New value' } });

    expect(input.value).toBe('New value');
  });
});
