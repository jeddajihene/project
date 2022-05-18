import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL
} from "../actionTypes/userActionTypes";
import axios from "axios";
export const getProfileAction = (id) => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/getProfile/" + id);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
    console.log("resData", res.data);
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAIL, payload: error.response.data });
  }
};
