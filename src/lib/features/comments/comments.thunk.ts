import { createAsyncThunk } from '@reduxjs/toolkit'

import { fetchComments } from '@/service/api'

export const fetchCommentsAsync = createAsyncThunk('comments/fetchComments', async () => {
  const comments = await fetchComments();
  return comments;
});