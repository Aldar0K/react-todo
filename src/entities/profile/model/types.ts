import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { ValidateProfileError } from './enums';

export type Profile = {
  id?: string;
  username?: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  avatar?: string;
};

export type ProfileSchema = {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
};
