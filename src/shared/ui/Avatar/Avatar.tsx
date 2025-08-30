import { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
};

export const Avatar = (props: AvatarProps) => {
  const { className, src, size, alt } = props;

  const style = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100
    }),
    [size]
  );

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={classNames(cls.root, {}, [className])}
    />
  );
};
