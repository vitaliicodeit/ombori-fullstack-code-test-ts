import { FC } from 'react';

import { ErrorBoundary } from './components/error-boundary/error-boundary.component';
import { UsersContainer } from './containers/users/users.container';

const App: FC = () => {
  return (
    <ErrorBoundary>
      <UsersContainer />
    </ErrorBoundary>
  );
};

export { App };
