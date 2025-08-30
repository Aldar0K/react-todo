export type { Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/article-details-schema';

export {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from './model/selectors';

export { fetchArticleById } from './model/services/fetchArticleById';
export { articleDetailsActions, articleDetailsReducer } from './model/slice';

export { ArticleDetails } from './ui/ArticleDetails';
