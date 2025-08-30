import { ValidateProfileError } from '../../enums';
import { Profile } from '../../types';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    age,
    avatar,
    city,
    country,
    currency,
    firstname,
    lastname,
    username
  } = profile;
  const errors: ValidateProfileError[] = [];

  if (!firstname) {
    errors.push(ValidateProfileError.INCORRECT_FIRSTNAME);
  }

  if (!lastname) {
    errors.push(ValidateProfileError.INCORRECT_LASTNAME);
  }

  if (!username) {
    errors.push(ValidateProfileError.INCORRECT_USERNAME);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  if (!currency) {
    errors.push(ValidateProfileError.INCORRECT_CURRENCY);
  }

  if (!avatar) {
    errors.push(ValidateProfileError.INCORRECT_AVATAR_URL);
  }

  return errors;
};
