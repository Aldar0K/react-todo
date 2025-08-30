import type { Meta, StoryObj } from '@storybook/react';

import { AppThemes } from 'app/providers/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { Code } from './Code';

const meta = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLight: Story = {
  args: {
    text: 'export default meta;\n' + 'type Story = StoryObj<typeof meta>;'
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)]
};

export const DefaultDark: Story = {
  args: {
    text: 'export default meta;\n' + 'type Story = StoryObj<typeof meta>;'
  },
  decorators: [withThemeDecorator(AppThemes.DARK)]
};
