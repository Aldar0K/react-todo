import { FC } from 'react';

import {
  getActiveTodosCount,
  getTodoFilter,
  hasCompletedTodos,
  hasTodos,
  TodoFilter,
  todoActions,
} from 'entities/todo';
import { classNames } from 'shared/lib';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';

import styles from './TodoFooter.module.scss';

interface TodoFooterProps {
  className?: string;
}

export const TodoFooter: FC<TodoFooterProps> = ({ className }) => {
  const activeCount = useAppSelector(getActiveTodosCount);
  const currentFilter = useAppSelector(getTodoFilter);
  const hasCompleted = useAppSelector(hasCompletedTodos);
  const hasAnyTodos = useAppSelector(hasTodos);
  const dispatch = useAppDispatch();

  const handleFilterChange = (filter: TodoFilter) => {
    dispatch(todoActions.setFilter(filter));
  };

  const handleClearCompleted = () => {
    dispatch(todoActions.clearCompleted());
  };

  if (!hasAnyTodos) {
    return null;
  }

  const pluralize = (count: number) => (count === 1 ? 'item' : 'items');

  return (
    <footer className={classNames(styles.footer, {}, [className])}>
      <span className={styles.todoCount}>
        <strong>{activeCount}</strong>
        {' '}
        {pluralize(activeCount)}
        {' '}
        left
      </span>
      <ul className={styles.filters}>
        <li>
          <button
            type="button"
            className={classNames(styles.filterButton, {
              [styles.selected]: currentFilter === TodoFilter.ALL,
            })}
            onClick={() => handleFilterChange(TodoFilter.ALL)}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={classNames(styles.filterButton, {
              [styles.selected]: currentFilter === TodoFilter.ACTIVE,
            })}
            onClick={() => handleFilterChange(TodoFilter.ACTIVE)}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            className={classNames(styles.filterButton, {
              [styles.selected]: currentFilter === TodoFilter.COMPLETED,
            })}
            onClick={() => handleFilterChange(TodoFilter.COMPLETED)}
          >
            Completed
          </button>
        </li>
      </ul>
      {hasCompleted && (
        <button
          type="button"
          className={styles.clearCompleted}
          onClick={handleClearCompleted}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};
