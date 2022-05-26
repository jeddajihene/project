import {
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_FAIL,
  LOADING
} from "../actionTypes/userActionTypes";
const initialState = {
  load: true,
  comments: [],
  errors: []
};
const commentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        load: false
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, payload],
        load: false,
        errors: []
      };
    case ADD_COMMENT_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        comments: payload,
        load: false,
        errors: []
      };
    case GET_COMMENT_FAIL:
      return {
        ...state,
        errors: payload.errors
      };

    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.filter((el) => el._id !== payload),
        load: false
      };
    case DELETE_COMMENT_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        load: false,
        comments: state.comments.map((el) => {
          if (el._id === payload.id) {
            return {
              ...el,
              description: payload.description
            };
          }
          return el;
        })
      };
    case EDIT_COMMENT_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    default:
      return state;
  }
};
export default commentReducer;
