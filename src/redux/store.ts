import { configureStore } from "@reduxjs/toolkit";
import browseReducer from "./browse/browseSlice";
import genreReducer from "./genre/genreSlice";
import sideBarReducer from "./sidebar/sideBarSlice";

export const store = configureStore({
  reducer: {
    browse: browseReducer,
    genre: genreReducer,
    sideBar: sideBarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
