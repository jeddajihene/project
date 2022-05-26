import {
  ADD_GALLERY_SUCCESS,
  ADD_GALLERY_FAIL,
  GET_GALLERY_SUCCESS,
  GET_GALLERY_FAIL,
  DELETE_GALLERY_SUCCESS,
  DELETE_GALLERY_FAIL,
  LOADING
} from "../actionTypes/userActionTypes";
import axios from "axios";
// galleryImage esta9belneha mil component win dispatchuna l'action//
export const addGalleryAction = (galleryImage) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/image/addimage", galleryImage);
    // galleryImage lil iste3mel//
    dispatch({ type: ADD_GALLERY_SUCCESS, payload: res.data });
    console.log("resData", res.data);
  } catch (error) {
    dispatch({ type: ADD_GALLERY_FAIL, payload: error.response.data });
  }
};
export const getGalleryAction = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get("/api/image/getimages");
    dispatch({ type: GET_GALLERY_SUCCESS, payload: res.data });
    console.log("resData", res.data);
  } catch (error) {
    dispatch({ type: GET_GALLERY_FAIL, payload: error.response.data });
  }
};
//delete gallery
export const deleteGalleryAction = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.delete("/api/image/deleteimage/" + id);
    dispatch({ type: DELETE_GALLERY_SUCCESS, payload: res.data });
    console.log("resData", res.data);
  } catch (error) {
    dispatch({ type: DELETE_GALLERY_FAIL, payload: error.response.data });
  }
};
