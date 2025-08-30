import type { Meta, StoryObj } from '@storybook/react';

import { AppThemes } from 'app/providers/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLight: Story = {
  decorators: [
    withThemeDecorator(AppThemes.LIGHT),
    // withStoreDecorator({ loginByUsername: { username: 'admin', password: '123' } }),
  ],
};

export const DefaultDark: Story = {
  decorators: [
    withThemeDecorator(AppThemes.DARK),
    // withStoreDecorator({ loginByUsername: { username: 'admin', password: '123' } })
  ],
};
