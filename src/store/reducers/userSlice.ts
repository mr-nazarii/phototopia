import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../types/user";

const initialState: UserState = {
  first_name: "",
  last_name: "",
  id: null,
  email: "",
  avatar: "",
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userFetch(state) {
      state.loading = true;
    },

    userFetchSuccsess(state, action: PayloadAction<any>) {
      const { data } = action.payload;
      const { first_name, last_name, email, avatar, id } = data;

      state.first_name = first_name;
      state.last_name = last_name;
      state.email = email;
      state.avatar = avatar;
      state.id = id;
      state.loading = false;
    },

    userFetchError(state) {
      state.error = "Something went wrong";
    },
  },
});

export const { userFetch, userFetchSuccsess, userFetchError } =
  userSlice.actions;

export default userSlice.reducer;
