import { createAsyncThunk } from '@reduxjs/toolkit'

import { fetchPosts } from '@/service/api'

export const fetchPostsAsync = createAsyncThunk('posts/fetchPosts', async () => {
  const posts = await fetchPosts();
  return posts;
});