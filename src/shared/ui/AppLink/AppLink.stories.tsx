import type { Meta, StoryObj } from '@storybook/react';

import { withRouterDecorator } from 'shared/config/storybook/withRouterDecorator/withRouterDecorator';
import { AppLink, AppLinkThemes } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
    children: 'AppLink',
  },
  decorators: [withRouterDecorator()], // Add Router decorator for Link component
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    theme: AppLinkThemes.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    theme: AppLinkThemes.SECONDARY,
  },
};

export const WithCustomPath: Story = {
  args: {
    to: '/dashboard',
    children: 'Go to Dashboard',
  },
};
