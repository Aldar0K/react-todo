import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  const { t } = useTranslation('not-found');

  return (
    <div className={cls.container} data-testid="NotFoundPage">
      {t('Page not found')}
    </div>
  );
};

export default NotFoundPage;
