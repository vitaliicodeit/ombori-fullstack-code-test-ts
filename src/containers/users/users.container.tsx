import { FC, useEffect } from 'react';

import { Header } from '../../components/header/header.component';
import { Preloader } from '../../components/preloader/preloader.component';
import { ErrorMessage } from '../../components/shared/error-message/error-message.component';
import { Users } from '../../components/users/users.component';
import { useGetUsers } from '../../hooks/use-get-users.hook';

const UsersContainer: FC = () => {
  const { hasMore, hasError, isFulfilled, isLoading, items, getNext } = useGetUsers();

  useEffect(() => {
    (async () => {
      await getNext();
    })();
  }, [getNext]);

  return (
    <Preloader fullHeight isLoading={isLoading && !isFulfilled}>
      <>
        <Header title="Users" />
        {hasError ? (
          <ErrorMessage>Users cannot be loaded! Please try again letter!</ErrorMessage>
        ) : (
          <Users hasMore={hasMore} isLoading={isLoading} getNext={getNext} items={items} />
        )}
      </>
    </Preloader>
  );
};

export { UsersContainer };
