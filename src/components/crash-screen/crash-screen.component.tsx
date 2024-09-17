import { FC, useCallback } from 'react';

import { Button } from '../shared/button/button.component';

import styles from './crash-screen.module.scss';

export const ApplicationCrash: FC = () => {
  const handleReload = useCallback(() => {
    window.location.href = '/';
  }, []);

  return (
    <div className={styles.CrashScreen}>
      <p className={styles.CrashScreen__Text}>Something went wrong!</p>
      <Button onClick={handleReload}>Reload</Button>
    </div>
  );
};
