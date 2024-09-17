import { FC } from 'react';

import { ErrorBoundary } from './components/error-boundary/error-boundary.component';
import { UsersContainer } from './containers/users/users.container';

import styles from './app.module.scss';

const App: FC = () => {
  return (
    <ErrorBoundary>
      <div className={styles.App}>
        <UsersContainer />
      </div>
    </ErrorBoundary>
  );
};

export { App };
