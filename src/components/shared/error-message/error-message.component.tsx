import { FC } from 'react';

import styles from './error-message.module.scss';

interface IErrorMessageProps {
  children: string;
}

export const ErrorMessage: FC<IErrorMessageProps> = (props) => {
  const { children } = props;

  return <div className={styles.ErrorMessage}>{children}</div>;
};
