import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text } from 'shared/ui';

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData
} from 'entities/profile';
import { getUserAuthData } from 'entities/user';
import { classNames } from 'shared/lib';
import cls from './Header.module.scss';

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = props => {
  const { className } = props;
  const { t: tProfile } = useTranslation('profile');
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readonly = useAppSelector(getProfileReadonly);
  const authData = useAppSelector(getUserAuthData);
  const profileData = useAppSelector(getProfileData);

  const isPossibleToEdit = useMemo(() => {
    return authData?.id === profileData?.id;
  }, [authData, profileData]);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div
      className={classNames(cls.container, {}, [className])}
      data-testid='Header'
    >
      <Text heading={tProfile('Profile')} />

      {isPossibleToEdit && (
        <div className={cls.buttons}>
          {readonly ? (
            <Button
              theme='outline'
              onClick={onEdit}
              className={cls['button-edit']}
            >
              {t('Edit')}
            </Button>
          ) : (
            <>
              <Button
                theme='outline'
                onClick={onCancelEdit}
                className={cls['button-cancel']}
              >
                {t('Cancel')}
              </Button>
              <Button
                theme='outline'
                onClick={onSave}
                className={cls['button-save']}
              >
                {t('Save')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
