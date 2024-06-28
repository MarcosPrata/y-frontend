import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Post } from '@/types';
import { PostState } from './posts.type';
import { fetchPostsAsync } from './posts.thunk';

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      console.log('Add post with id:', action.payload);
      state.posts.push(action.payload);
      console.log('Posts:', state.posts);
    },
    addPosts(state, action: PayloadAction<Post[]>) {
      state.posts.concat(action.payload);
    },
    updatePost(state, action: PayloadAction<Post>) {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    removePostById(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPostsAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      });
  },
});

export const {
  addPost,
  updatePost,
  removePostById
} = postSlice.actions;
export default postSlice.reducer;