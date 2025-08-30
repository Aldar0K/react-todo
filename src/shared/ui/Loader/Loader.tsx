import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './Loader.module.scss';

type LoaderProps = {
  className?: string;
};

export const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={classNames(cls.container, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
