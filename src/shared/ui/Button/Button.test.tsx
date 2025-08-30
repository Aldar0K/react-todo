import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Button } from 'shared/ui/Button';

describe('Button', () => {
  test('to be rendered', () => {
    // render(<Button>Test</Button>);
    componentRender(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('to be clear', () => {
    // render(<Button theme='clear'>Test</Button>);
    componentRender(<Button theme="clear">Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
