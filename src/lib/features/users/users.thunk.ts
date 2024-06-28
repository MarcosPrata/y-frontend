import { createAsyncThunk } from '@reduxjs/toolkit'

import { getUsers } from '@/service/api'

export const getUsersAsync = createAsyncThunk('users/getUsers', async () => {
  const users = await getUsers();
  return users;
});