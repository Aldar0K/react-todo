import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { getUserAuthData, userActions } from 'entities/user';
import { LoginModal, getUsername } from 'features/user/login-by-username';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkThemes, Button } from 'shared/ui';
import cls from './Header.module.scss';

type NavigationProps = {
  className?: string;
};

export const Header: FC<NavigationProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const authData = useAppSelector(getUserAuthData);
  const username = useAppSelector(getUsername);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <div className={classNames(cls.container, {}, [className])}>
        <div className={classNames(cls.links)}>
          <AppLink theme={AppLinkThemes.SECONDARY} to='/'>
            {t('Main')}
          </AppLink>
        </div>

        <div className={cls.right}>
          <Button theme='clear' onClick={handleLogout}>
            {t('Logout')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.container, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkThemes.SECONDARY} to='/'>
          {t('Main')}
        </AppLink>
      </div>

      <Button theme='clear' onClick={openAuthModal}>
        {username}
        {t('Login')}
      </Button>

      <LoginModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        className={cls['login-modal']}
      />
    </div>
  );
};
