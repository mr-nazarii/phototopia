// import { ProfileState } from "./../../types/profile";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  images: null,
  loading: false,
  error: false,
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    imagesFetch(state) {
      state.loading = true;
    },
    imagesFetchSuccsess(state, action: PayloadAction<any>) {
      state.loading = true;
      const data = action.payload;

      state.images = data;
    },
    imagesFetchError(state) {
      state.error = "Something went wrong";
    },
  },
});

export const { imagesFetch, imagesFetchSuccsess, imagesFetchError } =
  imagesSlice.actions;

export default imagesSlice.reducer;
