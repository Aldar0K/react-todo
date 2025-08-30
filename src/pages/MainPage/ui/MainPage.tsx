import { FC } from 'react';

import { TodoApp } from 'widgets/todo-app';
import styles from './MainPage.module.scss';

const MainPage: FC = () => (
  <div className={styles.container} data-testid="MainPage">
    <TodoApp />
  </div>
);

export default MainPage;
