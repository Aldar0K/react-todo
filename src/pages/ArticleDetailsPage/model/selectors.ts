import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.isLoading || false;

export const getArticleCommentsError = (state: StateSchema) =>
  state.articleDetailsComments?.error;

export const getAddCommentIsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.addCommentIsLoading || false;

export const getAddCommentError = (state: StateSchema) =>
  state.articleDetailsComments?.addCommentError;
