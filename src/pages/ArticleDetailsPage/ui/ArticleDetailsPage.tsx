import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ReducerList,
  useAppDispatch,
  useAppSelector
} from 'app/providers/StoreProvider';
import { ArticleDetails } from 'entities/article';
import { CommentList } from 'entities/comment';
import { AddCommentForm } from 'features/user/add-comment';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { Text } from 'shared/ui';
import {
  getAddCommentError,
  getAddCommentIsLoading,
  getArticleCommentsError,
  getArticleCommentsIsLoading
} from '../model/selectors';
import { addCommentForArticle } from '../model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import {
  ArticleDetailsCommentsReducer,
  getArticleComments
} from '../model/slice';
import styles from './ArticleDetailsPage.module.scss';

const reducers: ReducerList = {
  articleDetailsComments: ArticleDetailsCommentsReducer
};

type Params = {
  articleId: string;
};

const ArticleDetailsPage: FC = () => {
  // TODO add locales file
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const { articleId } = useParams<Params>();
  const comments = useAppSelector(getArticleComments.selectAll);
  const isLoading = useAppSelector(getArticleCommentsIsLoading);
  const error = useAppSelector(getArticleCommentsError);
  const addCommentIsLoading = useAppSelector(getAddCommentIsLoading);
  const addCommentError = useAppSelector(getAddCommentError);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
  }, []);

  if (!articleId) {
    return (
      <div className={styles.container} data-testid='ArticleDetailsPage'>
        <Text heading={t('Incorrect article id')} />
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={styles.container} data-testid='ArticleDetailsPage'>
        <ArticleDetails
          articleId={articleId}
          className={styles['article-details']}
        />
        <Text heading={t('Comments')} className={styles['comments-heading']} />
        <AddCommentForm
          onSendComment={onSendComment}
          isLoading={addCommentIsLoading}
          error={addCommentError}
          className={styles['add-comment-form']}
        />
        <CommentList
          className={styles.comments}
          comments={comments}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
