import { FC, useMemo } from 'react';

import styles from './user-card.module.scss';

interface IUserCardProps {
  avatarSrc: string;
  firstName: string;
  lastName: string;
}

export const UserCard: FC<IUserCardProps> = (props) => {
  const { avatarSrc, firstName, lastName } = props;

  const fullName = useMemo<string>(() => `${firstName} ${lastName}`, [firstName, lastName]);

  return (
    <div className={styles.UserCard}>
      <div className={styles.UserCard__Avatar}>
        <img src={avatarSrc} alt={fullName} />
      </div>
      <div className={styles.UserCard__FullName}>{fullName}</div>
    </div>
  );
};
