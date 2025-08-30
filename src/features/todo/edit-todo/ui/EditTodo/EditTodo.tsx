import { FC, KeyboardEvent, useState } from 'react';

import { useAppDispatch } from 'app/providers/StoreProvider';
import { todoActions } from 'entities/todo';

import styles from './EditTodo.module.scss';

interface EditTodoProps {
  id: string;
  text: string;
  onCancel: () => void;
  onSave: () => void;
}

export const EditTodo: FC<EditTodoProps> = ({
  id, text, onCancel, onSave,
}) => {
  const [editText, setEditText] = useState(text);
  const dispatch = useAppDispatch();

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(todoActions.editTodo({ id, text: editText }));
    } else {
      dispatch(todoActions.deleteTodo(id));
    }
    onSave();
  };

  const handleCancel = () => {
    setEditText(text);
    onCancel();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <input
      className={styles.edit}
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
      onBlur={handleSave}
      onKeyDown={handleKeyDown}
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
    />
  );
};
