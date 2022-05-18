import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  DELETE_OFFER_SUCCESS,
  DELETE_OFFER_FAIL
} from "../actionTypes/userActionTypes";
const initialState = {
  profile: {},
  errors: []
};
const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case DELETE_OFFER_SUCCESS:
      return {
        ...state,
        ...state.profile,
        offers: state.profile.offers.filter((el) => el._id !== payload)
        // offers: state.profile.offers.map((el) => {
        //   if (el._id !== payload) {
        //     return el;
        //   }
        // })
      };
    case DELETE_OFFER_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    default:
      return state;
  }
};
export default profileReducer;
