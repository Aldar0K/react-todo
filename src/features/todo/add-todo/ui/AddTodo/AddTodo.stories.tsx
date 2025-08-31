import type { Meta, StoryObj } from '@storybook/react';

import { withStoreDecorator } from 'shared/config/storybook/withStoreDecorator/withStoreDecorator';
import { AddTodo } from './AddTodo';

const meta = {
  title: 'features/AddTodo',
  component: AddTodo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [withStoreDecorator()],
} satisfies Meta<typeof AddTodo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withStoreDecorator()],
};

export const WithInitialTodos: Story = {
  decorators: [
    withStoreDecorator({
      todos: {
        todos: [
          {
            id: '1',
            text: 'Existing todo',
            completed: false,
            createdAt: Date.now(),
          },
        ],
        filter: 'all',
      },
    }),
  ],
};
