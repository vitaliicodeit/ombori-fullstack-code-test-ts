import { useCallback, useRef } from 'react';

export const useInfiniteScroll = (hasMore: boolean, getNext: () => void) => {
  const observer = useRef<Maybe<IntersectionObserver>>(null);

  const setIntersectionObserver = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((items) => {
        if (items[0].isIntersecting && hasMore) {
          getNext();
        }
      });

      if (node && hasMore && observer.current) {
        observer.current.observe(node);
      }
    },
    [hasMore, getNext],
  );

  return {
    setIntersectionObserver,
  };
};
