import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Clear: Story = {
  args: {
    theme: 'clear',
  },
};

export const Outline: Story = {
  args: {
    theme: 'outline',
  },
};

export const Background: Story = {
  args: {
    theme: 'background',
  },
};

export const BackgroundInverted: Story = {
  args: {
    theme: 'background-inverted',
  },
};

export const Square: Story = {
  args: {
    square: true,
    theme: 'background-inverted',
  },
};

export const SquareSizeSmall: Story = {
  args: {
    square: true,
    size: 'small',
    theme: 'background-inverted',
  },
};

export const SquareSizeMedium: Story = {
  args: {
    square: true,
    size: 'medium',
    theme: 'background-inverted',
  },
};

export const SquareSizeLarge: Story = {
  args: {
    square: true,
    size: 'large',
    theme: 'background-inverted',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
