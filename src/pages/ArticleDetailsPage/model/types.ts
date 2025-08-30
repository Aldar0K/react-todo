import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/comment';

export type ArticleDetailsCommentsSchema = EntityState<Comment, string> & {
  isLoading?: boolean;
  error?: string;
  addCommentIsLoading?: boolean;
  addCommentError?: string;
};
