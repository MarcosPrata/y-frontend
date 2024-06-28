import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Comment } from '@/types';
import { CommentState } from './comments.type';
import { getCommentsAsync } from './comments.thunk';

const initialState: CommentState = {
  comments: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment(state, action: PayloadAction<Comment>) {
      state.comments.push(action.payload);
    },
    addComments(state, action: PayloadAction<Comment[]>) {
      state.comments.concat(action.payload);
    },
    updateComment(state, action: PayloadAction<Comment>) {
      const index = state.comments.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.comments[index] = action.payload;
      }
    },
    removeCommentById(state, action: PayloadAction<number>) {
      state.comments = state.comments.filter(post => post.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCommentsAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCommentsAsync.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.comments = action.payload;
        state.loading = false;
      })
      .addCase(getCommentsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      });
  },
});

export const {
  addComment,
  addComments,
  updateComment,
  removeCommentById
} = postSlice.actions;

export default postSlice.reducer;