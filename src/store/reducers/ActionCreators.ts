import axios from "axios";
import { AppDispatch } from "./../store";
import {
  imagesFetch,
  imagesFetchError,
  imagesFetchSuccsess,
} from "./imagesSlice";
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

export const fetchImages =
  (page = 1) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(imagesFetch());
      const response = await axios.get<object>(
        "https://picsum.photos/v2/list",
        {
          params: { page: page, limit: 10 },
        }
      );

      dispatch(imagesFetchSuccsess(response.data));
    } catch (e) {
      dispatch(imagesFetchError());
    }
  };
