import { FC } from 'react';

import { useAppSelector } from 'app/providers/StoreProvider';
import { getFilteredTodos, hasTodos } from 'entities/todo';
import { TodoItem } from 'entities/todo/ui/TodoItem';
import { classNames } from 'shared/lib';

import styles from './TodoList.module.scss';

interface TodoListProps {
  className?: string;
}

export const TodoList: FC<TodoListProps> = ({ className }) => {
  const todos = useAppSelector(getFilteredTodos);
  const hasAnyTodos = useAppSelector(hasTodos);

  if (!hasAnyTodos) {
    return null;
  }

  return (
    <section className={classNames(styles.todoList, {}, [className])}>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};
