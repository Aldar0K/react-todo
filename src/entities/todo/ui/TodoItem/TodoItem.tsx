import { FC, useState } from 'react';

import { Todo } from 'entities/todo';
import { DeleteTodo } from 'features/todo/delete-todo';
import { EditTodo } from 'features/todo/edit-todo';
import { ToggleTodo } from 'features/todo/toggle-todo';
import { classNames } from 'shared/lib';

import styles from './TodoItem.module.scss';

interface TodoItemProps {
  todo: Todo;
  className?: string;
}

export const TodoItem: FC<TodoItemProps> = ({ todo, className }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <li className={classNames(styles.todoItem, {
      [styles.completed]: todo.completed,
      [styles.editing]: isEditing,
    }, [className])}
    >
      <div className={styles.view}>
        <ToggleTodo id={todo.id} completed={todo.completed} />
        <label
          className={styles.label}
          onDoubleClick={handleEdit}
          htmlFor={`todo-${todo.id}`}
        >
          {todo.text}
        </label>
        <DeleteTodo id={todo.id} />
      </div>
      {isEditing && (
        <EditTodo
          id={todo.id}
          text={todo.text}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </li>
  );
};
