import { ButtonHTMLAttributes, FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export type ButtonThemes =
  | 'clear'
  | 'clear-inverted'
  | 'outline'
  | 'background'
  | 'background-inverted';

export type ButtonSizes = 'small' | 'medium' | 'large';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: ButtonThemes;
  square?: boolean;
  size?: ButtonSizes;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
};

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    type = 'button',
    children,
    theme = 'outline',
    square = false,
    size = 'medium',
    disabled = false,
    loading = false,
    className,
    ...otherProps
  } = props;
  const { t } = useTranslation();

  return (
    <button
      type={type}
      className={classNames(
        cls.container,
        {
          [cls.square]: square,
          [cls.disabled]: disabled,
        },
        [cls[theme], cls[size], className],
      )}
      disabled={disabled || loading}
      data-testid="Button"
      {...otherProps}
    >
      {loading ? t('Loading') : children}
    </button>
  );
});
