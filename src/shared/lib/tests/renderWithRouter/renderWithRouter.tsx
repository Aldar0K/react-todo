import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export type RenderWithRouterOptions = {
  route: string
};

export const renderWithRouter = (component: ReactNode, options: RenderWithRouterOptions) => {
  const { route } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      {component}
    </MemoryRouter>,
  );
};
