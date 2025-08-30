import type { Meta, StoryObj } from '@storybook/react';

import { AppThemes } from 'app/providers/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { AppLink, AppLinkThemes } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
    children: 'AppLink',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLight: Story = {
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const DefaultDark: Story = {
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const PrimaryLight: Story = {
  args: {
    theme: AppLinkThemes.PRIMARY,
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkThemes.PRIMARY,
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const SecondaryLight: Story = {
  args: {
    theme: AppLinkThemes.SECONDARY,
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkThemes.SECONDARY,
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};
