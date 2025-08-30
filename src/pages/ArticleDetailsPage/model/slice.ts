import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/comment';
import { addCommentForArticle } from './services/addCommentForArticle';
import { fetchCommentsByArticleId } from './services/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from './types';

const commentsAdapter = createEntityAdapter<Comment, string>({
  selectId: comment => comment.id
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  state => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const ArticleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: undefined,
    error: undefined,
    addCommentIsLoading: false,
    addCommentError: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCommentsByArticleId.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addCommentForArticle.pending, (state, action) => {
        state.addCommentIsLoading = true;
        state.addCommentError = undefined;
      })
      .addCase(addCommentForArticle.fulfilled, (state, action) => {
        state.addCommentIsLoading = false;
      })
      .addCase(addCommentForArticle.rejected, (state, action) => {
        state.addCommentIsLoading = false;
        state.addCommentError = action.payload;
      });
  }
});

export const { reducer: ArticleDetailsCommentsReducer } =
  ArticleDetailsCommentsSlice;
export const { actions: ArticleDetailsCommentsActions } =
  ArticleDetailsCommentsSlice;
