import axios from "axios";
import {
  LOADING,
  AVATAR_SUCCESS,
  AVATAR_FAIL
} from "../actionTypes/userActionTypes";
export const upadateAvatarAction = (avatar) => async (dispatch) => {
  let formData = new FormData();
  formData.append("avatar", avatar);
  try {
    const res = await axios.post("/api/avatar/addavatar", formData);
    dispatch({ type: AVATAR_SUCCESS, payload: res.data });
    console.log("resData", res.data);
  } catch (error) {
    dispatch({ type: AVATAR_FAIL, payload: error.response.data });
  }
};
