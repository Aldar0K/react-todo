# React Todo App - Developer Documentation

## Project Overview

A modern React Todo application built with TypeScript, featuring a clean architecture, state management with Redux Toolkit, and comprehensive testing setup.

## Tech Stack

- **Frontend**: React 18, TypeScript
- **State Management**: Redux Toolkit, Redux Persist
- **Styling**: SCSS with CSS Modules
- **Routing**: React Router v6
- **Internationalization**: i18next
- **Testing**: Jest, React Testing Library, Storybook
- **Build Tools**: Webpack 5, Babel
- **Code Quality**: ESLint, Stylelint, Prettier

## Project Structure

```
src/
├── app/                    # Application core
│   ├── providers/         # Context providers (Store, Theme, Error Boundary)
│   ├── styles/           # Global styles and themes
│   └── types/            # Global type definitions
├── entities/              # Business entities
│   └── todo/             # Todo entity with model and UI
├── features/              # Feature modules
│   └── todo/             # Todo-related features (add, edit, delete, etc.)
├── pages/                 # Page components
│   └── MainPage/         # Main application page
├── shared/                # Shared utilities and components
│   ├── api/              # API configuration and base
│   ├── assets/           # Static assets (fonts, icons)
│   ├── config/           # Configuration files
│   ├── lib/              # Utility libraries
│   └── ui/               # Reusable UI components
└── widgets/               # Complex UI compositions
    └── todo-app/         # Main todo application widget
```

## Architecture Principles

### Feature-Sliced Design (FSD)
The project follows FSD methodology with clear separation of concerns:
- **entities**: Core business objects
- **features**: User interactions and business logic
- **shared**: Reusable utilities and components
- **widgets**: Complex UI compositions
- **pages**: Route-level components

### State Management
- Redux Toolkit for predictable state management
- Redux Persist for state persistence
- Normalized state structure
- Action creators and selectors for each slice

## Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Available Scripts
```bash
# Development
npm start                    # Start dev server on port 3000
npm run build              # Production build
npm run lint               # Run ESLint
npm run lint:fix           # Fix ESLint issues
npm run stylelint          # Run Stylelint
npm run stylelint:fix      # Fix Stylelint issues

# Testing
npm test                   # Run all tests
npm run test:unit         # Run unit tests only
npm run test:ui           # Run UI tests with Loki
npm run test:ui:ok        # Approve UI test changes

# Storybook
npm run storybook         # Start Storybook dev server
npm run storybook:build   # Build Storybook for production

# Code Generation
npm run create:component  # Generate new component
npm run create:page       # Generate new page
```

## Testing Strategy

### Unit Testing
- **Jest** as test runner
- **React Testing Library** for component testing
- **jsdom** environment for DOM simulation
- Custom `componentRender` utility with providers

### Test Structure
```
ComponentName/
├── ComponentName.tsx
├── ComponentName.module.scss
├── ComponentName.test.tsx      # Component tests
├── ComponentName.stories.tsx   # Storybook stories
└── index.ts
```

### Testing Utilities
- `componentRender`: Renders components with Redux, Router, and i18n providers
- `renderWithRouter`: Router-specific test utility
- `renderWithTranslation`: i18n-specific test utility
- `withStoreDecorator`: Storybook decorator for Redux

## State Management

### Store Structure
```typescript
interface StateSchema {
  todos: TodosState;
  // Future slices...
}

interface TodosState {
  todos: Todo[];
  filter: TodoFilter;
}
```

### Redux Toolkit Features
- **createSlice**: For reducers and actions
- **createSelector**: For memoized selectors
- **configureStore**: For store configuration
- **Redux Persist**: For state persistence

## Styling Architecture

### CSS Modules
- Component-scoped styles
- No global CSS conflicts
- Type-safe class names with TypeScript

### Theme System
- Light/Dark theme support
- CSS custom properties for theming
- Theme context for dynamic switching

### SCSS Structure
```
styles/
├── common/           # Global styles and resets
├── themes/           # Theme-specific styles
├── variables/        # SCSS variables and mixins
└── main.scss         # Main entry point
```

## Internationalization

### i18next Configuration
- Multi-language support (EN/RU)
- Namespace-based translations
- Lazy loading of translation files

### Translation Structure
```
public/locales/
├── en/
│   ├── main.json
│   ├── about.json
│   └── profile.json
└── ru/
    ├── main.json
    ├── about.json
    └── profile.json
```

## Code Quality

### ESLint Configuration
- Airbnb style guide
- TypeScript-specific rules
- React hooks rules
- Accessibility rules

### Stylelint Configuration
- SCSS/CSS linting
- Consistent formatting rules
- Import order validation

### Pre-commit Hooks
- Linting on staged files
- Type checking
- Test running

## Build Configuration

### Webpack 5
- Hot Module Replacement
- TypeScript compilation
- SCSS processing
- Asset optimization
- Code splitting

### Babel Configuration
- React JSX transformation
- TypeScript support
- Runtime transformation
- Environment-specific presets

## Deployment

### Vercel Configuration
- Automatic deployments from main branch
- Environment variable management
- Build optimization

### GitHub Pages
- Manual deployment via `npm run deploy`
- Static site generation
- Custom domain support

## Development Workflow

### 1. Feature Development
```bash
# Create new feature
npm run create:component -- --type=feature --name=FeatureName

# Implement feature logic
# Add tests
# Update stories
```

### 2. Testing
```bash
# Run tests in watch mode
npm test

# Check test coverage
npm test -- --coverage

# Run specific test file
npm test ComponentName.test.tsx
```

### 3. Code Review
```bash
# Lint code
npm run lint

# Fix auto-fixable issues
npm run lint:fix

# Check types
npx tsc --noEmit
```

### 4. Storybook Development
```bash
# Start Storybook
npm run storybook

# Build for production
npm run storybook:build
```

## Common Patterns

### Component Structure
```typescript
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import styles from './ComponentName.module.scss';

interface ComponentNameProps {
  className?: string;
  // ... other props
}

export const ComponentName: FC<ComponentNameProps> = ({ className }) => {
  const { t } = useTranslation();
  
  return (
    <div className={classNames(styles.ComponentName, {}, [className])}>
      {/* Component content */}
    </div>
  );
};
```

### Redux Slice Pattern
```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: StateType = {
  // Initial state
};

export const sliceName = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {
    actionName: (state, action: PayloadAction<PayloadType>) => {
      // State mutation logic
    },
  },
});

export const { actions, reducer } = sliceName;
```

### Selector Pattern
```typescript
import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getData = (state: StateSchema) => state.sliceName.data;

export const getProcessedData = createSelector(
  [getData],
  (data) => data.filter(/* logic */)
);
```

## Troubleshooting

### Common Issues

1. **TypeScript Errors**
   - Run `npx tsc --noEmit` to check types
   - Ensure all dependencies are properly typed

2. **Test Failures**
   - Check if mocks are properly configured
   - Verify component render utilities are imported correctly

3. **Build Errors**
   - Clear node_modules and reinstall
   - Check webpack configuration
   - Verify all imports are correct

4. **Styling Issues**
   - Ensure CSS modules are properly imported
   - Check theme context is working
   - Verify SCSS compilation

## Contributing

### Code Style
- Follow existing patterns and conventions
- Use TypeScript strictly
- Write comprehensive tests
- Update documentation as needed

### Pull Request Process
1. Create feature branch from main
2. Implement changes with tests
3. Ensure all checks pass
4. Update relevant documentation
5. Submit PR with clear description

## Resources

- [Feature-Sliced Design](https://feature-sliced.design/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Storybook Documentation](https://storybook.js.org/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
