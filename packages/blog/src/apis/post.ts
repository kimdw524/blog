import { axiosInstance } from './axiosInstance';

import { PostData } from '@/types/post';

export const getPosts = () => {
  return axiosInstance.get<PostData[]>(`/posts`);
};
