import {
  ADD_GALLERY_SUCCESS,
  ADD_GALLERY_FAIL
} from "../actionTypes/userActionTypes";
const initialState = {
  add_gallery_msg: "",
  errors: []
};
const galleryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_GALLERY_SUCCESS:
      return {
        ...state,
        add_gallery_msg: payload.msg
      };
    case ADD_GALLERY_FAIL:
      return {
        ...state,
        errors: payload.errors
      };
    default:
      return state;
  }
};
export default galleryReducer;
