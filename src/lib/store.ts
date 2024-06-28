import { configureStore } from '@reduxjs/toolkit'

import postsSlice from './features/posts/posts.slice'
import commentsSlice from './features/comments/comments.slice'
import usersSlice from './features/users/users.slice'

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        comments: commentsSlice,
        users: usersSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch