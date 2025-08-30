import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './TemplateName.module.scss';

const TemplateName: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container} data-testid="TemplateName">
      TemplateName
    </div>
  )
};

export default memo(TemplateName);
