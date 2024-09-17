import { FC, ReactElement } from 'react';
import cn from 'classnames';

import { Loader } from '../shared/loader/loader.component';

import styles from './preloader.module.scss';

interface IPreloaderProps {
  fullHeight?: boolean;
  isLoading: boolean;
  children: ReactElement;
}

export const Preloader: FC<IPreloaderProps> = (props) => {
  const { fullHeight = false, isLoading, children } = props;

  if (isLoading) {
    return (
      <div className={cn(styles.Preloader, { [styles['Preloader--full-height']]: fullHeight })}>
        <Loader />
      </div>
    );
  }

  return children;
};
