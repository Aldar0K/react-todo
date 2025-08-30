import type { Meta, StoryObj } from '@storybook/react';

import { AppThemes } from 'app/providers/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { Text } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLight: Story = {
  args: {
    heading: 'Some heading',
    text: 'Some text',
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const DefaultDark: Story = {
  args: {
    heading: 'Some heading',
    text: 'Some text',
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const OnlyHeadingLight: Story = {
  args: {
    heading: 'Some heading',
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const OnlyHeadingDark: Story = {
  args: {
    heading: 'Some heading',
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const OnlyTextLight: Story = {
  args: {
    text: 'Some text',
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Some text',
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const ErrorLight: Story = {
  args: {
    heading: 'Some heading',
    text: 'Some text',
    theme: 'error',
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const ErrorDark: Story = {
  args: {
    heading: 'Some heading',
    text: 'Some text',
    theme: 'error',
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};
