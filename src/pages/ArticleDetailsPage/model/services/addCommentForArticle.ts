import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/article';
import { Comment } from 'entities/comment';
import { getUserAuthData } from 'entities/user';
import i18n from 'shared/config/i18n/i18n';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, { extra, rejectWithValue, getState, dispatch }) => {
    const userId = getUserAuthData(getState())?.id;
    const articleId = getArticleDetailsData(getState())?.id;

    if (!userId || !text || !articleId) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        text,
        articleId,
        userId
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(articleId));

      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('Comment error'));
    }
  }
);
