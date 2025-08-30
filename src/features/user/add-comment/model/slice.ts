import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddCommentSchema } from './types';

const initialState: AddCommentSchema = {
  text: '',
  isLoading: false,
  error: ''
};

export const addCommentSlice = createSlice({
  name: 'add-comment',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    }
  }
  // extraReducers: builder => {
  //   builder
  //     .addCase(loginByUsername.pending, state => {
  //       state.error = '';
  //       state.isLoading = true;
  //     })
  //     .addCase(loginByUsername.fulfilled, state => {
  //       state.isLoading = false;
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // }
});

export const { actions: addCommentActions, reducer: addCommentReducer } =
  addCommentSlice;
