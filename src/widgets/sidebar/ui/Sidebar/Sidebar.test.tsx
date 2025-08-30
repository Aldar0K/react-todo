import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender';
import { Sidebar } from 'widgets/sidebar';

describe('Sidebar', () => {
  test('to be rendered', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });

  test('to be able to collapse', () => {
    componentRender(<Sidebar />);
    const toggleButton = screen.getByTestId('button-toggle');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
  });
});
