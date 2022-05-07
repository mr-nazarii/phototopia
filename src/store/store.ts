import imagesReducer from "./reducers/imagesSlice";
import profileReducer from "./reducers/profileSlice";
import userReducer from "./reducers/userSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  images: imagesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store.getState;
export type AppDispatch = typeof store.dispatch;
