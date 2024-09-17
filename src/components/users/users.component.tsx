import { FC } from 'react';

import { IUserData } from '../../api/users/interfaces/user-data.interface';
import { useInfiniteScroll } from '../../hooks/use-infinite-scroll.hook';
import { Spinner } from '../shared/spinner/spinner.component';

import { UserCard } from './user-card/user-card.component';

import styles from './users.module.scss';

const USERS_AMOUNT_BEFORE_PRELOAD = 3;

interface IUsersProps {
  hasMore: boolean;
  isLoading: boolean;
  getNext: () => Promise<void>;
  items: IUserData[];
}

export const Users: FC<IUsersProps> = (props) => {
  const { hasMore, isLoading, getNext, items } = props;

  const { setIntersectionObserver } = useInfiniteScroll(hasMore, getNext);

  return (
    <div className={styles.Users} role="list">
      {items.map((item: IUserData, index) => (
        <div
          key={item.id}
          className={styles.Users__Item}
          role="listitem"
          ref={
            items.length < index + USERS_AMOUNT_BEFORE_PRELOAD ? setIntersectionObserver : undefined
          }
        >
          <UserCard avatarSrc={item.avatar} firstName={item.first_name} lastName={item.last_name} />
        </div>
      ))}
      {isLoading && (
        <div className={styles.Users__Spinner}>
          <Spinner />
        </div>
      )}
      {!hasMore && <div className={styles.Users__NoItemsLeft}>There are no more users</div>}
    </div>
  );
};
