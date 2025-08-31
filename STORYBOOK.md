# Storybook Guide

## Overview

Storybook is configured for this project to provide:
- Component development in isolation
- Interactive documentation
- Visual testing
- Design system management

## Quick Start

```bash
# Start Storybook
npm run storybook

# Build for production
npm run storybook:build
```

## Configuration

### Main Configuration (`config/storybook/main.ts`)
- TypeScript support with SWC builder
- CSS Modules support for SCSS
- SVG handling with @svgr/webpack
- Path aliases for clean imports

### Preview Configuration (`config/storybook/preview.ts`)
- Global styles import
- Theme switching (light/dark)
- Background controls
- Action logging

## Decorators

### Store Decorator
Use for components that need Redux store:

```typescript
import { withStoreDecorator } from 'shared/config/storybook/withStoreDecorator/withStoreDecorator';

// Apply to all stories in component (RECOMMENDED)
const meta = {
  title: 'features/ComponentName',
  component: ComponentName,
  decorators: [withStoreDecorator()], // Default store for all stories
} satisfies Meta<typeof ComponentName>;

// Or apply to specific story with custom state
export const WithData: Story = {
  decorators: [
    withStoreDecorator({
      todos: {
        todos: [{ id: '1', text: 'Test', completed: false }],
        filter: 'all'
      }
    })
  ]
};
```

**Important**: Always add `withStoreDecorator()` to `meta.decorators` for components that use Redux hooks like `useAppDispatch` or `useAppSelector`.

**Note**: The decorator creates a real Redux store, not a mock. This ensures that Redux hooks work correctly in Storybook.

### Router Decorator
Use for components with navigation:

```typescript
import { withRouterDecorator } from 'shared/config/storybook/withRouterDecorator/withRouterDecorator';

export const WithRouter: Story = {
  decorators: [withRouterDecorator(['/dashboard'])],
};
```

### Style Decorator
Automatically applied for global styles.

## Creating Stories

### Basic Story
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
```

### Story with Props
```typescript
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};
```

### Story with Controls
```typescript
export const WithControls: Story = {
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
};
```

## Best Practices

1. **Naming**: Use descriptive story names
2. **Organization**: Group related components in folders
3. **Documentation**: Add JSDoc comments for complex props
4. **Testing**: Include interaction tests for user flows
5. **Accessibility**: Use the a11y addon to check components

## Addons

- **Essentials**: Core Storybook functionality
- **Interactions**: Test user interactions
- **Themes**: Switch between light/dark themes
- **Accessibility**: Check component accessibility
- **Links**: Navigate between stories

## Troubleshooting

### Common Issues

1. **CSS Modules not working**
   - Check that styles are imported correctly
   - Verify webpack configuration in main.ts

2. **Redux store errors**
   - Ensure withStoreDecorator is applied in meta.decorators
   - Check initial state structure
   - Verify store configuration in decorator

3. **Router errors**
   - Use withRouterDecorator for navigation components
   - Set appropriate initial routes

4. **React not defined errors**
   - Check that React is imported in preview.ts
   - Verify webpack aliases for React

5. **Global variables undefined**
   - Check DefinePlugin configuration in main.ts
   - Ensure __API_URL__, __IS_DEV__, __PROJECT__ are defined

6. **Build failures**
   - Clear node_modules and reinstall
   - Check TypeScript configuration

## Examples

See existing stories in:
- `src/shared/ui/Button/Button.stories.tsx`
- `src/features/todo/add-todo/ui/AddTodo/AddTodo.stories.tsx`
