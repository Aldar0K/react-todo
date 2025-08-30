import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { AddTodo } from './AddTodo';

const mockDispatch = jest.fn();

jest.mock('app/providers/StoreProvider', () => ({
  useAppDispatch: () => mockDispatch,
}));

describe('AddTodo', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  test('should render input field', () => {
    componentRender(<AddTodo />);

    const input = screen.getByTestId('Input');
    expect(input).toBeInTheDocument();
  });

  test('should dispatch addTodo action on Enter press', () => {
    componentRender(<AddTodo />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'todos/addTodo',
      payload: 'New todo',
    });
  });

  test('should clear input after adding todo', () => {
    componentRender(<AddTodo />);

    const input = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(input.value).toBe('');
  });

  test('should not dispatch action for empty input', () => {
    componentRender(<AddTodo />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(mockDispatch).not.toHaveBeenCalled();
  });

  test('should trim whitespace from input', () => {
    componentRender(<AddTodo />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '  New todo  ' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'todos/addTodo',
      payload: '  New todo  ',
    });
  });
});
