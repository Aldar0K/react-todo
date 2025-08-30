import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { TodoApp } from './TodoApp';

describe('TodoApp Integration', () => {
  test('should allow user to add, toggle, and delete todos', () => {
    componentRender(<TodoApp />);

    // Add a todo
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    // Verify todo appears
    expect(screen.getByText('Test todo')).toBeInTheDocument();

    // Add another todo
    fireEvent.change(input, { target: { value: 'Second todo' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    // Verify both todos appear
    expect(screen.getByText('Test todo')).toBeInTheDocument();
    expect(screen.getByText('Second todo')).toBeInTheDocument();

    // Check footer shows correct count
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('items left')).toBeInTheDocument();

    // Toggle first todo
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);

    // Check count updated
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('item left')).toBeInTheDocument();

    // Check clear completed button appears
    expect(screen.getByRole('button', { name: 'Clear completed' })).toBeInTheDocument();
  });

  test('should filter todos correctly', () => {
    componentRender(<TodoApp />);

    // Add todos
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Active todo' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    fireEvent.change(input, { target: { value: 'Completed todo' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    // Complete second todo
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]);

    // Test Active filter
    const activeButton = screen.getByRole('button', { name: 'Active' });
    fireEvent.click(activeButton);

    expect(screen.getByText('Active todo')).toBeInTheDocument();
    expect(screen.queryByText('Completed todo')).not.toBeInTheDocument();

    // Test Completed filter
    const completedButton = screen.getByRole('button', { name: 'Completed' });
    fireEvent.click(completedButton);

    expect(screen.queryByText('Active todo')).not.toBeInTheDocument();
    expect(screen.getByText('Completed todo')).toBeInTheDocument();

    // Test All filter
    const allButton = screen.getByRole('button', { name: 'All' });
    fireEvent.click(allButton);

    expect(screen.getByText('Active todo')).toBeInTheDocument();
    expect(screen.getByText('Completed todo')).toBeInTheDocument();
  });

  test('should clear completed todos', () => {
    componentRender(<TodoApp />);

    // Add and complete a todo
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'To be completed' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    // Clear completed
    const clearButton = screen.getByRole('button', { name: 'Clear completed' });
    fireEvent.click(clearButton);

    // Verify todo is removed
    expect(screen.queryByText('To be completed')).not.toBeInTheDocument();
  });

  test('should edit todo on double click', () => {
    componentRender(<TodoApp />);

    // Add a todo
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Original text' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    // Double click to edit
    const todoText = screen.getByText('Original text');
    fireEvent.doubleClick(todoText);

    // Should show edit input
    const editInput = screen.getByDisplayValue('Original text');
    expect(editInput).toBeInTheDocument();

    // Edit and save
    fireEvent.change(editInput, { target: { value: 'Updated text' } });
    fireEvent.keyDown(editInput, { key: 'Enter' });

    // Verify text updated
    expect(screen.getByText('Updated text')).toBeInTheDocument();
    expect(screen.queryByText('Original text')).not.toBeInTheDocument();
  });
});
