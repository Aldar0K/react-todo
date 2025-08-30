import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './ArticlesPage.module.scss';

const ArticlesPage: FC = () => {
  // TODO add locales file
  const { t } = useTranslation('articles');

  return (
    <div className={styles.container} data-testid='ArticlesPage'>
      ArticlesPage
    </div>
  );
};

export default memo(ArticlesPage);
