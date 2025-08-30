import type { Meta, StoryObj } from '@storybook/react';

import { AppThemes } from 'app/providers/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLight: Story = {
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const DefaultDark: Story = {
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const ClearLight: Story = {
  args: {
    theme: 'clear',
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const ClearDark: Story = {
  args: {
    theme: 'clear',
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const OutlineLight: Story = {
  args: {
    theme: 'outline',
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const OutlineDark: Story = {
  args: {
    theme: 'outline',
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const BackgroundLight: Story = {
  args: {
    theme: 'background',
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const BackgroundDark: Story = {
  args: {
    theme: 'background',
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const BackgroundInvertedLight: Story = {
  args: {
    theme: 'background-inverted',
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const BackgroundInvertedDark: Story = {
  args: {
    theme: 'background-inverted',
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const SquareLight: Story = {
  args: {
    square: true,
    theme: 'background-inverted',
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const SquareDark: Story = {
  args: {
    square: true,
    theme: 'background-inverted',
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const SquareSizeSmallLight: Story = {
  args: {
    square: true,
    size: 'small',
    theme: 'background-inverted',
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const SquareSizeSmallDark: Story = {
  args: {
    square: true,
    size: 'small',
    theme: 'background-inverted',
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const SquareSizeMediumLight: Story = {
  args: {
    square: true,
    size: 'medium',
    theme: 'background-inverted',
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const SquareSizeMediumDark: Story = {
  args: {
    square: true,
    size: 'medium',
    theme: 'background-inverted',
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const SquareSizeLargeLight: Story = {
  args: {
    square: true,
    size: 'large',
    theme: 'background-inverted',
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const SquareSizeLargeDark: Story = {
  args: {
    square: true,
    size: 'large',
    theme: 'background-inverted',
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const DisabledLight: Story = {
  args: {
    disabled: true,
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const DisabledDark: Story = {
  args: {
    disabled: true,
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const LoadingLight: Story = {
  args: {
    loading: true,
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const LoadingDark: Story = {
  args: {
    loading: true,
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};
