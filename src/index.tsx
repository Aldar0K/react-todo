import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'shared/config/i18n/i18n';

import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
);
