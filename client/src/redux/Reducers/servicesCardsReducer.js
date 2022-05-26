import {
  GET_PHOTOGRAPHER_SUCCESS,
  GET_PHOTOGRAPHER_FAIL,
  GET_DECORATOR_SUCCESS,
  GET_DECORATOR_FAIL,
  GET_ANIMATOR_SUCCESS,
  GET_ANIMATOR_FAIL,
  GET_PASTRY_SUCCESS,
  GET_PASTRY_FAIL,
  LOADING
} from "../actionTypes/userActionTypes";
const initialState = {
  load: true,
  ourPhotographers: null,
  decorator: null,
  animator: null,
  pastrys: null,
  errors: []
};
const servicesCardsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        load: false
      };
    case GET_PHOTOGRAPHER_SUCCESS:
      return {
        ...state,
        ourPhotographers: payload,
        load: false
      };
    case GET_PHOTOGRAPHER_FAIL:
      return {
        ...state,
        errors: payload.errors
      };

    case GET_DECORATOR_SUCCESS:
      return {
        ...state,
        decorator: payload,
        load: false
      };
    case GET_DECORATOR_FAIL:
      return {
        ...state,
        errors: payload.errors
      };

    case GET_ANIMATOR_SUCCESS:
      return {
        ...state,
        animator: payload,
        load: false
      };
    case GET_ANIMATOR_FAIL:
      return {
        ...state,
        errors: payload.errors
      };

    case GET_PASTRY_SUCCESS:
      return {
        ...state,
        pastrys: payload,
        load: false
      };
    case GET_PASTRY_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    default:
      return state;
  }
};
export default servicesCardsReducer;
