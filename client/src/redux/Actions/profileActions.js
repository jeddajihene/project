import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  LOADING
} from "../actionTypes/userActionTypes";
import axios from "axios";
export const getProfileAction = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get("/api/profile/getProfile/" + id);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAIL, payload: error.response.data });
  }
};
