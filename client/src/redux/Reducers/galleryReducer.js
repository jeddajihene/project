import {
  ADD_GALLERY_SUCCESS,
  ADD_GALLERY_FAIL,
  GET_GALLERY_FAIL,
  GET_GALLERY_SUCCESS,
  DELETE_GALLERY_SUCCESS,
  DELETE_GALLERY_FAIL,
  LOADING,
  REMOVE
} from "../actionTypes/userActionTypes";
const initialState = {
  load: true,
  add_gallery_msg: "",
  image_added: false,
  errors: [],
  images: []
};
const galleryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        load: false
      };
    case ADD_GALLERY_SUCCESS:
      return {
        ...state,
        add_gallery_msg: payload.msg,
        load: false
      };
    case ADD_GALLERY_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case GET_GALLERY_SUCCESS:
      return {
        ...state,
        images: payload,
        add_gallery_msg: "",
        load: false
      };
    case GET_GALLERY_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case DELETE_GALLERY_SUCCESS:
      return {
        ...state,
        images: state.images.filter((el) => el._id !== payload),
        add_gallery_msg: "",
        load: false
      };
    case DELETE_GALLERY_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    case REMOVE:
      return {
        add_gallery_msg: ""
      };
    default:
      return state;
  }
};
export default galleryReducer;
