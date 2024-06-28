import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import postReducer from './modules/posts/posts.slice';

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;