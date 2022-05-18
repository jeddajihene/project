import {
  FAIL,
  LOADING,
  LOGIN,
  REGISTER,
  PASSWORD_SUCCESS,
  PASSWORD_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  AVATAR_SUCCESS,
  AVATAR_FAIL,
  LOGOUT,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  REMOVE_USER_ERROR
} from "../actionTypes/userActionTypes";

const initialState = {
  user: null,
  load: true,
  auth: false,
  password_msg: "",
  updated_user_msg: "",
  updated_avatar_msg: "",
  errors: []
};
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case REGISTER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.newUser,
        auth: true,
        load: false,
        errors: []
      };
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.foundUser,
        auth: true,
        load: false
      };
    case LOADING:
      return {
        ...state,
        load: false
      };
    case PASSWORD_SUCCESS:
      return {
        ...state,
        password_msg: payload,
        load: false,
        errors: []
      };
    case PASSWORD_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updated_user_msg: payload,
        load: false,
        errors: []
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case AVATAR_SUCCESS:
      return {
        ...state,
        user: payload.user,
        updated_avatar_msg: payload.msg,
        load: false,
        errors: []
      };
    case AVATAR_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        user: null,
        load: true,
        auth: false,
        password_msg: "",
        updated_user_msg: "",
        errors: []
      };

    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        load: false,
        errors: []
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case REMOVE_USER_ERROR:
      return {
        ...state,
        errors: payload
      };
    default:
      return state;
  }
};
export default userReducer;
