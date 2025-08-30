import type { Meta, StoryObj } from '@storybook/react';

import { AppThemes } from 'app/providers/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    children: 'Modal',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLight: Story = {
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
  args: {
    isOpen: true,
  },
};

export const DefaultDark: Story = {
  decorators: [withThemeDecorator(AppThemes.DARK)],
  args: {
    isOpen: true,
  },
};

export const TitleLight: Story = {
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
  args: {
    isOpen: true,
    title: 'Some title',
  },
};

export const TitleDark: Story = {
  decorators: [withThemeDecorator(AppThemes.DARK)],
  args: {
    isOpen: true,
    title: 'Some title',
  },
};
