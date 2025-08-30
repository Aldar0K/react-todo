import {
  ReducerList,
  useAppDispatch,
  useAppSelector
} from 'app/providers/StoreProvider';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import {
  ProfileCard,
  ValidateProfileError,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer
} from 'entities/profile';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { Text } from 'shared/ui';
import { Header } from './Header';

const reducers: ReducerList = {
  profile: profileReducer
};

type Params = {
  profileId: string;
};

type ProfilePageProps = {
  className?: string;
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const { profileId } = useParams<Params>();
  const profileForm = useAppSelector(getProfileForm);
  const isLoadig = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);
  const readonly = useAppSelector(getProfileReadonly);
  const validateErrors = useAppSelector(getProfileValidateErrors);
  const { t } = useTranslation('profile');

  const validateErrorTranslates = {
    [ValidateProfileError.NO_DATA]: t('No profile data'),
    [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    [ValidateProfileError.INCORRECT_FIRSTNAME]: t('Incorrect first name'),
    [ValidateProfileError.INCORRECT_LASTNAME]: t('Incorrect last name'),
    [ValidateProfileError.INCORRECT_USERNAME]: t('Incorrect username'),
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileError.INCORRECT_CITY]: t('Incorrect city'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
    [ValidateProfileError.INCORRECT_CURRENCY]: t('Incorrect currency'),
    [ValidateProfileError.INCORRECT_AVATAR_URL]: t('Incorrect avatar url')
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      if (profileId) {
        dispatch(fetchProfileData(profileId));
      }
    }
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || '' }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={className} data-testid='ProfilePage'>
        <Header />
        <ProfileCard
          profile={profileForm}
          isLoadig={isLoadig}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
        {validateErrors?.length && (
          <Text
            theme='error'
            text={validateErrors
              .map(error => validateErrorTranslates[error])
              .join(', ')}
          />
        )}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
