import type { Meta, StoryObj } from '@storybook/react';

import { AppThemes } from 'app/providers/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLight: Story = {
  decorators: [withThemeDecorator(AppThemes.LIGHT)]
};

export const DefaultDark: Story = {
  decorators: [withThemeDecorator(AppThemes.DARK)]
};
