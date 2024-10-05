import useRecentPostList from '@/hooks/useRecentPostList';

import PostList from '@/components/common/PostList';

const RecentPostList = () => {
  const { data } = useRecentPostList(1);

  return (
    <PostList>
      {data.data.map((post) => (
        <PostList.Item
          key={post.id}
          thumbnail={post.thumbnail}
          title={post.title}
          width="320px"
          content={post.content}
          date={post.createdAt}
          tags={post.tags}
        />
      ))}
    </PostList>
  );
};

export default RecentPostList;
