import { CSSProperties, FC } from 'react';
import { classNames } from 'shared/lib';

import cls from './Skeleton.module.scss';

type SkeletonProps = {
  height?: string | number;
  width?: string | number;
  border?: string | number;
  className?: string;
};

export const Skeleton: FC<SkeletonProps> = props => {
  const { height, width, border = 16, className } = props;
  const style: CSSProperties = {
    height,
    maxWidth: width,
    borderRadius: border
  };

  return (
    <div
      style={style}
      className={classNames(cls.skeleton, {}, [className])}
      data-testid='Skeleton'
    />
  );
};
