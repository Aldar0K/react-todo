import { FC, FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ReducerList,
  useAppDispatch,
  useAppSelector
} from 'app/providers/StoreProvider';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { Button, Input } from 'shared/ui';
import { getAddCommentText } from '../../model/selectors';
import { addCommentActions, addCommentReducer } from '../../model/slice';
import cls from './AddCommentForm.module.scss';

const reducers: ReducerList = {
  addComment: addCommentReducer
};

export type AddCommentFormProps = {
  onSendComment: (text: string) => void;
  isLoading?: boolean;
  error?: string;
  className?: string;
};

const AddCommentForm: FC<AddCommentFormProps> = memo(props => {
  const { onSendComment, isLoading, error, className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useAppSelector(getAddCommentText);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentActions.setText(value));
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isLoading) {
        onSendComment(text);
        onCommentTextChange('');
      }
    },
    [onCommentTextChange, onSendComment, text]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <form
        onSubmit={onSubmit}
        className={classNames(cls.container, {}, [className])}
        data-testid='AddCommentForm'
      >
        <div className={cls.top}>
          <Input
            placeholder={t('Your comment')}
            value={text}
            onChange={onCommentTextChange}
            className={cls.input}
          />

          <Button type='submit' loading={isLoading} disabled={!text}>
            {t('Send')}
          </Button>
        </div>

        {error && <p className={cls.error}>{error}</p>}
      </form>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
