import { configureStore } from "@reduxjs/toolkit";
import { victoriaBaseApi } from "./api";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./features/auth.slice";
const persistConfig = {
  key: "auth",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice);
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    [victoriaBaseApi.reducerPath]: victoriaBaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(victoriaBaseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistStor = persistStore(store);
