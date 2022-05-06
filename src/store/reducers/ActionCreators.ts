import axios from "axios";
import { AppDispatch } from "./../store";
import { userFetch, userFetchError, userFetchSuccsess } from "./userSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userFetch());
    const response = await axios.get<object>("https://reqres.in/api/users/2");

    dispatch(userFetchSuccsess(response.data));
  } catch (e) {
    dispatch(userFetchError());
  }
};
