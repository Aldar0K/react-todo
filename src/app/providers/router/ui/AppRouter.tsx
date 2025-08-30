import { FC, Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRouteProps, routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'widgets/page-loader';
import { RequireAuth } from './RequireAuth';

const AppRouter: FC = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className='page-wrapper'>{route.element}</div>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
