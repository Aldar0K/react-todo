import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import cls from './PageError.module.scss';

type PageErrorProps = {
  className?: string;
};

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.container, {}, [className])}>
      <p className={cls.text}>{t('Something went wrong')}</p>
      <Button theme="clear" onClick={refreshPage}>
        {t('Reload the page')}
      </Button>
    </div>
  );
};
