import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ReducerList,
  useAppDispatch,
  useAppSelector
} from 'app/providers/StoreProvider';
import IconCalendar from 'shared/assets/icons/calendar-20-20.svg';
import IconEye from 'shared/assets/icons/eye-20-20.svg';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { Avatar, Icon, Skeleton, Text } from 'shared/ui';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice';
import {
  ArticleBlock,
  ArticleBlockType
} from '../../model/types/article-block';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer
};

type ArticleDetailsProps = {
  articleId: string;
  className?: string;
};

export const ArticleDetails: FC<ArticleDetailsProps> = props => {
  const { articleId, className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getArticleDetailsIsLoading);
  const error = useAppSelector(getArticleDetailsError);
  const article = useAppSelector(getArticleDetailsData);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} />;
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    dispatch(fetchArticleById(articleId));
  }, []);

  let content: JSX.Element | null = null;

  if (isLoading) {
    content = (
      <div className={cls.skeleton}>
        <Skeleton
          height={200}
          width={200}
          border='50%'
          className={cls.avatar}
        />
        <Skeleton height={32} width={300} />
        <Skeleton height={24} width={600} />
        <Skeleton height={200} width='100%' />
        <Skeleton height={200} width='100%' />
      </div>
    );
  }

  if (error) {
    content = (
      <Text theme='error' align='center' heading={`${t('Error')}: ${error}`} />
    );
  }

  if (article) {
    content = (
      <>
        <Avatar src={article.img} size={200} className={cls.avatar} />
        <Text heading={article.title} text={article.subtitle} size='l' />
        <div className={cls.views}>
          <Icon SVG={IconEye} />
          <Text text={article.views.toString()} />
        </div>
        <div className={cls.date}>
          <Icon SVG={IconCalendar} />
          <Text text={article.createdAt} />
        </div>
        <ul className={cls.blocks}>{article.blocks.map(renderBlock)}</ul>
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div
        className={classNames(cls.container, {}, [className])}
        data-testid='ArticleDetails'
      >
        {content}
      </div>
    </DynamicModuleLoader>
  );
};
