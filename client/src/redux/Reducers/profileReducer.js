import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  LOADING
} from "../actionTypes/userActionTypes";
const initialState = {
  profile: {},
  errors: [],
  load: true
};
const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        load: false
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload,
        load: false
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    default:
      return state;
  }
};
export default profileReducer;
