import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../enums';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../types';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const formData = getProfileForm(getState());
      const profileId = formData?.id;

      const errors = validateProfileData(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      const response = await extra.api.put<Profile>(
        `/profiles/${profileId}`,
        formData
      );

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  }
);
