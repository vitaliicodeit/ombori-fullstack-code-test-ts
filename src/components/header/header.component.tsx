import { FC } from 'react';

import styles from './header.module.scss';

interface IHeaderProps {
  title: string;
}

export const Header: FC<IHeaderProps> = (props) => {
  const { title } = props;

  return <header className={styles.Header}>{title}</header>;
};
