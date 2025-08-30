import { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers/StoreProvider';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import { LangSwitcher } from 'widgets/lang-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(prev => !prev);
  const sidebarItems = useAppSelector(getSidebarItems);

  const itemsList = useMemo(
    () =>
      sidebarItems.map(item => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed]
  );

  return (
    <div
      className={classNames(
        cls.container,
        {
          [cls.collapsed]: collapsed
        },
        [className]
      )}
      data-testid='Sidebar'
    >
      <Button
        theme='background-inverted'
        square
        size='large'
        onClick={toggleCollapsed}
        className={cls.button}
        data-testid='button-toggle'
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={classNames(cls.links)}>{itemsList}</div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
