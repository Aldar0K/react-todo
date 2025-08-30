import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Code } from 'shared/ui';
import { ArticleCodeBlock } from '../../model/types/article-block';
import cls from './ArticleCodeBlockComponent.module.scss';

type ArticleCodeBlockComponentProps = {
  block: ArticleCodeBlock;
  className?: string;
};

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> =
  memo(props => {
    const { block, className } = props;
    const { t } = useTranslation();

    return (
      <li
        className={classNames(cls.container, {}, [className])}
        data-testid='ArticleCodeBlockComponent'
      >
        <Code text={block.code} />
      </li>
    );
  });
