import { createAsyncThunk } from '@reduxjs/toolkit'

import { getComments } from '@/service/api'

export const getCommentsAsync = createAsyncThunk('comments/getComments', async () => {
  const comments = await getComments();
  return comments;
});