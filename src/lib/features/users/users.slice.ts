import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@/types';
import { UserState } from './users.type';

const initialState: UserState = {
  users: [],
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
});

export const {
  addUser,
  addUsers,
  updateUser,
  removeUserById
} = postSlice.actions;

export default postSlice.reducer;