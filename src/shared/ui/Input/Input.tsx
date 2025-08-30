import {
  ChangeEventHandler,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState
} from 'react';

import { classNames } from 'shared/lib';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

type InputProps = HTMLInputProps & {
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
  className?: string;
};

export const Input = memo((props: InputProps) => {
  const {
    type = 'text',
    value,
    onChange,
    placeholder,
    autoFocus,
    readonly,
    className,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    onChange?.(event.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  return (
    <div
      className={classNames(cls.container, {}, [className])}
      data-testid='Input'
    >
      {placeholder && (
        <span className={cls.placeholder}>{`${placeholder}>`}</span>
      )}

      <input
        ref={ref}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        className={classNames(
          cls.input,
          {
            [cls.readonly]: readonly,
            [cls.focused]: isFocused
          },
          []
        )}
        {...otherProps}
      />
    </div>
  );
});
