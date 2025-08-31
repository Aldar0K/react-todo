import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from 'shared/config/storybook/withStoreDecorator/withStoreDecorator';
import { TodoFooter } from './TodoFooter';

const meta = {
  title: 'features/TodoFooter',
  component: TodoFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [withStoreDecorator()], // Add Redux store for all stories
} satisfies Meta<typeof TodoFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTodos: Story = {
  decorators: [
    withStoreDecorator({
      todos: {
        todos: [
          {
            id: '1',
            text: 'Learn React',
            completed: false,
            createdAt: Date.now(),
          },
          {
            id: '2',
            text: 'Build Todo App',
            completed: true,
            createdAt: Date.now(),
          },
        ],
        filter: 'all',
      },
    }),
  ],
};

export const WithActiveFilter: Story = {
  decorators: [
    withStoreDecorator({
      todos: {
        todos: [
          {
            id: '1',
            text: 'Learn React',
            completed: false,
            createdAt: Date.now(),
          },
          {
            id: '2',
            text: 'Build Todo App',
            completed: true,
            createdAt: Date.now(),
          },
        ],
        filter: 'active',
      },
    }),
  ],
};
