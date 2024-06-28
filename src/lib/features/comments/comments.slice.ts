import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Comment } from '@/types';
import { CommentState } from './comments.type';

const initialState: CommentState = {
  comments: [],
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
});

export const {
  addComment,
  addComments,
  updateComment,
  removeCommentById
} = postSlice.actions;

export default postSlice.reducer;