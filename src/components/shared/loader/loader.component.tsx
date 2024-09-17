import { FC } from 'react';

import styles from './loader.module.scss';

export const Loader: FC = () => (
  <div className={styles.Loader}>
    <div className={styles.Loader__Outer} />
    <div className={styles.Loader__Inner} />
    <div className={styles.Loader__Core} />
  </div>
);
