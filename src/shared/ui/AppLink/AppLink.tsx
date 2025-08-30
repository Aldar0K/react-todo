import { FC, ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib';
import cls from './AppLink.module.scss';

export enum AppLinkThemes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type AppLinkProps = LinkProps & {
  theme?: AppLinkThemes;
  children: ReactNode;
  className?: string;
};

export const AppLink: FC<AppLinkProps> = memo((props) => {
  const {
    to,
    theme = AppLinkThemes.PRIMARY,
    children,
    className,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.container, {}, [cls[theme], className])}
      data-testid="AppLink"
      {...otherProps}
    >
      {children}
    </Link>
  );
});
