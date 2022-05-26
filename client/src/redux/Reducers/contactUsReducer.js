import {
  CONTACT_US_SUCCESS,
  CONTACT_US_FAIL,
  REMOVE
} from "../actionTypes/userActionTypes";
const initialState = {
  success_contactUs_msg: "",
  errors: []
};
const contactUsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CONTACT_US_SUCCESS:
      return {
        ...state,
        success_contactUs_msg: payload.msg,
        errors: []
      };
    case CONTACT_US_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case REMOVE:
      return {
        ...state,
        success_contactUs_msg: ""
      };
    default:
      return state;
  }
};
export default contactUsReducer;
