import { useAppSelector } from 'app/providers/StoreProvider';
import { getUserAuthData } from '../model/selectors/getUserAuthData';

export const useAuth = () => {
  const auth = useAppSelector(getUserAuthData);

  return !!auth;
};
