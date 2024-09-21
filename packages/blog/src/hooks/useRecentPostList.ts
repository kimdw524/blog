import { useSuspenseQuery } from '@tanstack/react-query';

import { getPosts } from '@/apis/post';

const useRecentPostList = (page: number = 1) => {
  const result = useSuspenseQuery({
    queryKey: ['postList', 'recent', page],
    queryFn: () => getPosts(),
  });

  if (result.error && !result.isFetching) {
    throw result.error;
  }

  return result;
};

export default useRecentPostList;
