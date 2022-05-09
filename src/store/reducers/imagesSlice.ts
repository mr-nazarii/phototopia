// import { ProfileState } from "./../../types/profile";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  images: [],
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
      state.loading = false;
      const data = action.payload;
      state.images = [];
      state.images = data;
    },
    imagesAddNew(state, action: PayloadAction<any>) {
      state.loading = false;
      const data = action.payload;
      const newData = [...state.images, ...data];

      state.images = newData;
    },
    imagesFetchError(state) {
      state.error = "Something went wrong";
    },
  },
});

export const {
  imagesFetch,
  imagesFetchSuccsess,
  imagesFetchError,
  imagesAddNew,
} = imagesSlice.actions;

export default imagesSlice.reducer;
