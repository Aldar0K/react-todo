import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { todoReducer } from 'entities/todo';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export type ComponentRenderOptions = {
  route?: string;
  initialState?: any;
};

export const componentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {},
) => {
  const { route = '/', initialState } = options;
  const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
    preloadedState: initialState,
  });

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </Provider>,
  );
};
