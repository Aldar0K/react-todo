import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loginByUsername } from './services/loginByUsername/loginByUsername';
import { LoginByUsernameSchema } from './types';

const initialState: LoginByUsernameSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
};

export const loginByUsernameSlice = createSlice({
  name: 'login-by-username',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: loginByUsernameActions,
  reducer: loginByUsernameReducer,
} = loginByUsernameSlice;
