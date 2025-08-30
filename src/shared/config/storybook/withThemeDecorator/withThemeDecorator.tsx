import { Decorator } from '@storybook/react';

import { AppThemes, ThemeProvider } from 'app/providers/ThemeProvider';

export const withThemeDecorator = (theme: AppThemes): Decorator => (Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story/>
    </div>
  </ThemeProvider>
);
