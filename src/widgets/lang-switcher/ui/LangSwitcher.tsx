import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

type LangSwitcherProps = {
  short?: boolean;
  className?: string;
};

export const LangSwitcher: FC<LangSwitcherProps> = ({ short, className }) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme="clear"
      onClick={toggle}
      className={classNames('', {}, [className])}
    >
      {short ? t('Short Language') : t('Language')}
    </Button>
  );
};
