import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@/types';
import { UserState } from './users.type';
import { getUsersAsync } from './users.thunk';

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    addUsers(state, action: PayloadAction<User[]>) {
      state.users.concat(action.payload);
    },
    updateUser(state, action: PayloadAction<User>) {
      const index = state.users.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    removeUserById(state, action: PayloadAction<number>) {
      state.users = state.users.filter(post => post.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsersAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersAsync.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      });
  },
});

export const {
  addUser,
  addUsers,
  updateUser,
  removeUserById
} = postSlice.actions;

export default postSlice.reducer;