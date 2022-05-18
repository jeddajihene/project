import {
  ADD_GALLERY_SUCCESS,
  ADD_GALLERY_FAIL
} from "../actionTypes/userActionTypes";
import axios from "axios";
// galleryImage esta9belneha mil component win dispatchuna l'action//
export const addGalleryAction = (galleryImage) => async (dispatch) => {
  try {
    const res = await axios.post("/api/image/addimage", galleryImage);
    // galleryImage lil iste3mel//
    dispatch({ type: ADD_GALLERY_SUCCESS, payload: res.data });
    console.log("resData", res.data);
  } catch (error) {
    dispatch({ type: ADD_GALLERY_FAIL, payload: error.response.data });
  }
};
