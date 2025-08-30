import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './AboutPage.module.scss';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return (
    <div className={styles.container} data-testid="AboutPage">
      {t('About')}
    </div>
  );
};

export default AboutPage;
