import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Text } from 'shared/ui';
import { ArticleImageBlock } from '../../model/types/article-block';
import cls from './ArticleImageBlockComponent.module.scss';

type ArticleImageBlockComponentProps = {
  block: ArticleImageBlock;
  className?: string;
};

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
  memo(props => {
    const { block, className } = props;
    const { t } = useTranslation();

    return (
      <li
        className={classNames(cls.container, {}, [className])}
        data-testid='ArticleImageBlockComponent'
      >
        <img src={block.src} alt={block.title} className={cls.image} />
        {block.title && <Text text={block.title} className={cls.title} />}
      </li>
    );
  });
