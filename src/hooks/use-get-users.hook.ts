import { useCallback, useRef, useState } from 'react';
import { v4 } from 'uuid';

import { getUserRequest } from '../api/users/get-user.request';
import { IUserData } from '../api/users/interfaces/user-data.interface';

const DELAY_SECONDS = 3;
const ITEMS_PER_PAGE = 5;

interface IUseGetUsersHook {
  hasError: boolean;
  hasMore: boolean;
  isFulfilled: boolean;
  isLoading: boolean;
  items: IUserData[];
  getNext: () => Promise<void>;
}

export const useGetUsers = (): IUseGetUsersHook => {
  const [hasError, setHasError] = useState<boolean>(false);

  const [hasMore, setHasMore] = useState<boolean>(true);

  const [isFulfilled, setIsFulfilled] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [items, setItems] = useState<IUserData[]>([]);

  const requestUuidRef = useRef<string>(v4());

  const nextPageRef = useRef<number>(1);

  const getNext = useCallback(async () => {
    const requestUuid = v4();

    requestUuidRef.current = requestUuid;

    setIsLoading(true);
    setHasError(false);

    const response: TPaginatedResponse<IUserData> = await getUserRequest({
      delay: DELAY_SECONDS,
      per_page: ITEMS_PER_PAGE,
      page: nextPageRef.current,
    });

    if (requestUuid !== requestUuidRef.current) {
      return;
    }

    if (!response.success) {
      setHasError(true);
    } else if (!response.data.length) {
      setHasMore(false);
    } else {
      setHasMore(true);

      setItems((prevState) => [...prevState, ...response.data]);

      nextPageRef.current = response.page + 1;
    }

    setIsFulfilled(true);
    setIsLoading(false);
  }, []);

  return {
    hasError,
    hasMore,
    isLoading,
    isFulfilled,
    items,
    getNext,
  };
};
