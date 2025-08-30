import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './TemplateName.module.scss';

type TemplateNameProps = {
  className?: string;
};

const TemplateName: FC<TemplateNameProps> = props => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div
      className={classNames(cls.container, {}, [className])}
      data-testid="TemplateName"
    >
      TemplateName
    </div>
  )
};

export default TemplateName;
