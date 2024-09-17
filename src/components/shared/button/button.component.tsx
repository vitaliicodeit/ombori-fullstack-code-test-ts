import { FC, SyntheticEvent, useCallback } from 'react';

import styles from './button.module.scss';

interface IButtonProps {
  children?: string;
  onClick?: (event: SyntheticEvent) => void;
}

const Button: FC<IButtonProps> = (props) => {
  const { children, onClick } = props;

  const handleClick = useCallback(
    (event: SyntheticEvent) => {
      if (onClick) {
        onClick(event);
      }
    },
    [onClick],
  );

  return (
    <button className={styles.Button} onClick={handleClick}>
      {children}
    </button>
  );
};

export { Button };
