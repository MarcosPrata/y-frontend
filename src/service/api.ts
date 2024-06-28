import axios from 'axios';
import { Post, User, Comment } from '@/types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get(`${API_BASE_URL}/posts`);
  return response.data;
};

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const fetchComments = async (): Promise<Comment[]> => {
  const response = await axios.get(`${API_BASE_URL}/comments`);
  return response.data;
};