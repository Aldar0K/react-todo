import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { Profile } from '../../types';

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Profile>(`profiles/${profileId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue(i18n.t('Profile error'));
  }
});
