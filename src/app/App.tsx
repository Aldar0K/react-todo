import { FC } from 'react';

import './styles/main.scss';

import { TodoApp } from 'widgets/todo-app';
import { classNames } from 'shared/lib';
import { useTheme } from './providers/ThemeProvider';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <TodoApp />
    </div>
  );
};

export default App;
