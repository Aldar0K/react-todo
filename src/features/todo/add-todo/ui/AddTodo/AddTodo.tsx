import { FC, useState, KeyboardEvent } from 'react';

import { todoActions } from 'entities/todo';
import { classNames } from 'shared/lib';
import { Input } from 'shared/ui';
import { useAppDispatch } from 'app/providers/StoreProvider';

import styles from './AddTodo.module.scss';

interface AddTodoProps {
  className?: string;
}

export const AddTodo: FC<AddTodoProps> = ({ className }) => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (text.trim()) {
      dispatch(todoActions.addTodo(text));
      setText('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={classNames(styles.addTodo, {}, [className])}>
      <Input
        className={styles.input}
        value={text}
        onChange={setText}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        autoFocus
      />
    </div>
  );
};
