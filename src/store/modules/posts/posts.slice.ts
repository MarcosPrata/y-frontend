import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  username: string;
}

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
    removePost(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    updatePost(state, action: PayloadAction<Post>) {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
  },
});

export const { addPost, removePost, updatePost } = postSlice.actions;
export default postSlice.reducer;