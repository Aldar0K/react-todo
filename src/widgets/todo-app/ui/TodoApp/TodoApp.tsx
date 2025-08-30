import { FC } from 'react';

import { AddTodo } from 'features/todo/add-todo';
import { TodoList } from 'features/todo/todo-list';
import { TodoFooter } from 'features/todo/todo-footer';
import { classNames } from 'shared/lib';

import styles from './TodoApp.module.scss';

interface TodoAppProps {
  className?: string;
}

export const TodoApp: FC<TodoAppProps> = ({ className }) => (
  <div className={classNames(styles.todoApp, {}, [className])}>
    <header className={styles.header}>
      <h1 className={styles.title}>Todos</h1>
      <AddTodo />
    </header>
    <main className={styles.main}>
      <TodoList />
      <TodoFooter />
    </main>
  </div>
);
