import { useAuth } from 'entities/user';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const isAuth = useAuth();
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
