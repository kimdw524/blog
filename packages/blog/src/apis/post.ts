import { axiosInstance } from './axiosInstance';

interface PostListResponse {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  createdAt: string;
  tags: string[];
}

export const getPosts = () => {
  return axiosInstance.get<PostListResponse[]>(`/posts`);
};
