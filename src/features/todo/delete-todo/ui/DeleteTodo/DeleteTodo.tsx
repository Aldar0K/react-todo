import { FC } from 'react';

import { useAppDispatch } from 'app/providers/StoreProvider';
import { todoActions } from 'entities/todo';

import styles from './DeleteTodo.module.scss';

interface DeleteTodoProps {
  id: string;
}

export const DeleteTodo: FC<DeleteTodoProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(todoActions.deleteTodo(id));
  };

  return (
    <button
      className={styles.destroy}
      onClick={handleDelete}
      type="button"
      aria-label="Delete todo"
    />
  );
};
