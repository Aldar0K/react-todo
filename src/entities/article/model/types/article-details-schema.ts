import { Article } from './article';

export type ArticleDetailsSchema = {
  data?: Article;
  isLoading?: boolean;
  error?: string;
};
