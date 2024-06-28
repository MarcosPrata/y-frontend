import { createAsyncThunk } from '@reduxjs/toolkit'

import { getPosts } from '@/service/api'

export const getPostsAsync = createAsyncThunk('posts/getPosts', async () => {
  const posts = await getPosts();
  return posts;
});