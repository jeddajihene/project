import {
  ADD_OFFER_SUCCESS,
  ADD_OFFER_FAIL,
  GET_OFFER_FAIL,
  GET_OFFER_SUCCESS,
  DELETE_OFFER_SUCCESS,
  DELETE_OFFER_FAIL,
  LOADING,
  REMOVE
} from "../actionTypes/userActionTypes";
const initialState = {
  success_offer_msg: "",
  load: true,
  offers: [],
  errors: []
};

const offerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        load: false
      };
    case ADD_OFFER_SUCCESS:
      return {
        ...state,
        offers: [...state.offers, payload.newOffer],
        success_offer_msg: payload.msg,
        load: false
      };
    case ADD_OFFER_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case GET_OFFER_SUCCESS:
      return {
        ...state,
        offers: payload,
        load: false
      };
    case GET_OFFER_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case DELETE_OFFER_SUCCESS:
      return {
        ...state,
        load: false,
        offers: state.offers.filter((el) => el._id !== payload)
      };
    case DELETE_OFFER_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case REMOVE:
      return {
        success_offer_msg: ""
      };
    default:
      return state;
  }
};
export default offerReducer;
