import { createAsyncThunk } from '@reduxjs/toolkit'

import { fetchUsers } from '@/service/api'

export const fetchUsersAsync = createAsyncThunk('users/fetchUsers', async () => {
  const users = await fetchUsers();
  return users;
});