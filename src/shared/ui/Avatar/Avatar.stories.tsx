import type { Meta, StoryObj } from '@storybook/react';

import { AppThemes } from 'app/providers/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import AvatarImg from './storybook.jpg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLight: Story = {
  args: {
    size: 100,
    src: AvatarImg
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)]
};

export const DefaultDark: Story = {
  args: {
    size: 100,
    src: AvatarImg
  },
  decorators: [withThemeDecorator(AppThemes.DARK)]
};

export const SmallLight: Story = {
  args: {
    size: 50,
    src: AvatarImg
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)]
};

export const SmallDark: Story = {
  args: {
    size: 50,
    src: AvatarImg
  },
  decorators: [withThemeDecorator(AppThemes.DARK)]
};

export const BigLight: Story = {
  args: {
    size: 300,
    src: AvatarImg
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)]
};

export const BigDark: Story = {
  args: {
    size: 300,
    src: AvatarImg
  },
  decorators: [withThemeDecorator(AppThemes.DARK)]
};
