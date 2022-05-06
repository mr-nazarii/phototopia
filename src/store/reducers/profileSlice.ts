import { ProfileState } from "./../../types/profile";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProfileState = {
  logedIn: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileLogedToggle(state) {
      state.logedIn = !state.logedIn;
    },
  },
});

export const { profileLogedToggle } = profileSlice.actions;

export default profileSlice.reducer;
