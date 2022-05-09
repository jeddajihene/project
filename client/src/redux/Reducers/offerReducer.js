import {
  ADD_OFFER_SUCCESS,
  ADD_OFFER_FAIL,
} from "../actionTypes/userActionTypes";
const initialState = {
  offer: null,
  success_offer_msg: "",
  errors: [],
};

const offerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_OFFER_SUCCESS:
      return {
        ...state,
        offer: payload.newOffer,
        success_offer_msg: payload.msg,
      };
    case ADD_OFFER_FAIL:
      return {
        ...state,
        errors: payload.errors,
      };
    default:
      return state;
  }
};
export default offerReducer;
