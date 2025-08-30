import type { Meta, StoryObj } from '@storybook/react';

import { AppThemes } from 'app/providers/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLight: Story = {
  args: {
    height: 100,
    width: 300
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)]
};

export const DefaultDark: Story = {
  args: {
    height: 100,
    width: 300
  },
  decorators: [withThemeDecorator(AppThemes.DARK)]
};

export const CircleLight: Story = {
  args: {
    height: 100,
    width: 100,
    border: '50%'
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)]
};

export const CircleDark: Story = {
  args: {
    height: 100,
    width: 100,
    border: '50%'
  },
  decorators: [withThemeDecorator(AppThemes.DARK)]
};
