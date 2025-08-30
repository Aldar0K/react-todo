import { FC } from 'react';

import { useAppDispatch } from 'app/providers/StoreProvider';
import { todoActions } from 'entities/todo';

import styles from './ToggleTodo.module.scss';

interface ToggleTodoProps {
  id: string;
  completed: boolean;
}

export const ToggleTodo: FC<ToggleTodoProps> = ({ id, completed }) => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(todoActions.toggleTodo(id));
  };

  return (
    <input
      id={`todo-${id}`}
      className={styles.toggle}
      type="checkbox"
      checked={completed}
      onChange={handleToggle}
    />
  );
};
