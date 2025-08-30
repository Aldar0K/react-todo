import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Text } from 'shared/ui';
import { ArticleTextBlock } from '../../model/types/article-block';
import cls from './ArticleTextBlockComponent.module.scss';

type ArticleTextBlockComponentProps = {
  block: ArticleTextBlock;
  className?: string;
};

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> =
  memo(props => {
    const { block, className } = props;
    const { t } = useTranslation();

    return (
      <li
        className={classNames(cls.container, {}, [className])}
        data-testid='ArticleTextBlockComponent'
      >
        {block.title && <Text heading={block.title} className={cls.title} />}

        <ul className={cls.paragraphs}>
          {block.paragraphs.map((paragraph, index) => (
            <li key={index}>
              <Text text={paragraph} className={cls.paragraph} />
            </li>
          ))}
        </ul>
      </li>
    );
  });
