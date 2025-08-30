import type { Preview } from "@storybook/react";

import { AppThemes } from "../../src/app/providers/ThemeProvider";
import { withRouterDecorator } from '../../src/shared/config/storybook/withRouterDecorator';
import { withStyleDecorator } from '../../src/shared/config/storybook/withStyleDecorator';
import { withThemeDecorator } from '../../src/shared/config/storybook/withThemeDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withStyleDecorator,
    withRouterDecorator,
    // withThemeDecorator(AppThemes.LIGHT)
  ],
};

export default preview;
