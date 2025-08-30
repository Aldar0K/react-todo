import { FC, SVGProps, VFC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './Icon.module.scss';

type IconProps = {
  SVG: VFC<SVGProps<SVGSVGElement>>;
  className?: string;
};

export const Icon: FC<IconProps> = memo(props => {
  const { SVG, className } = props;
  const { t } = useTranslation();

  return (
    <SVG className={classNames(cls.icon, {}, [className])} data-testid='Icon' />
  );
});
