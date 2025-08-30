import { FC, Suspense, useEffect } from 'react';

import './styles/main.scss';

import { userActions } from 'entities/user';
import { classNames } from 'shared/lib';
import { Header } from 'widgets/header';
import { Sidebar } from 'widgets/sidebar';
import { useAppDispatch } from './providers/StoreProvider';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <Suspense fallback=''>
      <div className={classNames('app', {}, [theme])}>
        <Header />
        <div className='app__content'>
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
