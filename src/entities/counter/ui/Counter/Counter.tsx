import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { Button } from 'shared/ui';
import { getCounterValue } from '../../model/selectors';
import { counterActions } from '../../model/slice';

type CounterProps = {
  className?: string;
};

export const Counter: FC<CounterProps> = props => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={className} data-testid='Counter'>
      <h1>{`${t('Counter')}: ${counterValue}`}</h1>
      <Button onClick={increment}>{t('Increment')}</Button>
      <Button onClick={decrement}>{t('Decrement')}</Button>
    </div>
  );
};
