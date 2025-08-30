import axios from 'axios';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { baseUrl } from 'shared/api';
import styles from './MainPage.module.scss';

const getArticles = async () => {
  try {
    const response = await axios.get<any[]>(`${baseUrl}/articles`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer',
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const MainPage: FC = () => {
  const { t } = useTranslation('');

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className={styles.container} data-testid="MainPage">
      <h1>{t('Main')}</h1>
    </div>
  );
};

export default MainPage;
