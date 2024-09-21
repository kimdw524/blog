import { ReactNode } from 'react';

import * as s from './PostList.css';

interface PostListProps {
  children: ReactNode;
}

const PostList = ({ children }: PostListProps) => {
  return <div className={s.postList}>{children}</div>;
};

export default PostList;
