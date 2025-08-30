import { getUserAuthData } from 'entities/user';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes, Icon } from 'shared/ui';
import { SidebarItemType } from '../../model/types';
import cls from './SidebarItem.module.scss';

type SidebarItemProps = {
  item: SidebarItemType;
  collapsed: boolean;
};

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { path, text, Icon: IconItem, authOnly } = item;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkThemes.SECONDARY}
      to={path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <Icon SVG={IconItem} className={cls.icon} />
      <span className={cls.text}>{t(text)}</span>
    </AppLink>
  );
});
