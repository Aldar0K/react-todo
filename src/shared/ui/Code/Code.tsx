import { FC, memo, useCallback } from 'react';

import IconCopy from 'shared/assets/icons/copy-20-20.svg';
import { classNames } from 'shared/lib';
import { Button } from '../Button';
import { Icon } from '../Icon';
import cls from './Code.module.scss';

type CodeProps = {
  text: string;
  className?: string;
};

export const Code: FC<CodeProps> = memo(props => {
  const { text, className } = props;

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre
      className={classNames(cls.container, {}, [className])}
      onClick={copyToClipboard}
      data-testid='Code'
    >
      <Button size='medium' theme='clear' className={cls['button-copy']}>
        <Icon SVG={IconCopy} className={cls['icon-copy']} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
