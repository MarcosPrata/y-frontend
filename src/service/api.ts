import axios from 'axios';
import { Post, User, Comment } from '@/types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get(`${API_BASE_URL}/posts`);
  return response.data;
};

export const getPostById = async (postId: number): Promise<Post[]> => {
  const response = await axios.get(`${API_BASE_URL}/posts/${postId}`);
  return response.data;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const getUserById = async (userId: number): Promise<Post[]> => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

export const getComments = async (): Promise<Comment[]> => {
  const response = await axios.get(`${API_BASE_URL}/comments`);
  return response.data;
};
