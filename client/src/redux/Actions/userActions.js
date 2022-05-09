import axios from "axios";
import {
  LOADING,
  LOGIN,
  LOGOUT,
  REGISTER,
  FAIL,
  PASSWORD_SUCCESS,
  PASSWORD_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
} from "../actionTypes/userActionTypes";
import setToken from "../../utils/setTokenInHeader";

//register
export const registerUser = (registerForm, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/users/register", registerForm);
    dispatch({ type: REGISTER, payload: res.data });
    navigate("/edit-profile");
    setToken();
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
//login
export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/users/login", user);
    dispatch({ type: LOGIN, payload: res.data });
    setToken();
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
  // update password
};
export const upadatePassWordAction = (upadatePassWord) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.put(
      "/api/editprofil/updatepassword",
      upadatePassWord
    );
    dispatch({ type: PASSWORD_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: PASSWORD_FAIL, payload: error.response.data });
  }
};
//Update User
export const upadateUserAction = (upadateUser) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.put("/api/editprofil/updateUser", upadateUser);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAIL, payload: error.response.data });
  }
};
//logOut
export const logOutAction = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
// LOAD USER CONNECTED
export const loadUserAction = () => async (dispatch) => {
  setToken();
  dispatch({ type: LOADING });
  try {
    const res = await axios.get("/api/users/current");
    dispatch({ type: LOAD_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data });
  }
};
