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
import axios from "axios";
//add comment
export const addCommentAction = (id, addComment) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post(
      "/api/commentaire/addcomment/" + id,
      addComment
    );
    dispatch({ type: ADD_COMMENT_SUCCESS, payload: res.data });
    console.log("resData", res.data);
  } catch (error) {
    dispatch({ type: ADD_COMMENT_FAIL, payload: error.response.data });
  }
};
//get all comments
export const getCommentAction = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get("/api/commentaire/getcomment/" + id);
    dispatch({ type: GET_COMMENT_SUCCESS, payload: res.data });
    console.log("resData", res.data);
  } catch (error) {
    dispatch({ type: GET_COMMENT_FAIL, payload: error.response.data });
  }
};
// delete comment
export const deleteCommentAction = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.delete("/api/commentaire/deletecomment/" + id);
    dispatch({ type: DELETE_COMMENT_SUCCESS, payload: res.data });
    console.log("resData", res.data);
  } catch (error) {
    dispatch({ type: DELETE_COMMENT_FAIL, payload: error.response.data });
  }
};
//edit comment
export const editCommentAction = (id, editComment) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.put(
      "/api/commentaire/updatecomment/" + id,
      editComment
    );
    dispatch({ type: EDIT_COMMENT_SUCCESS, payload: res.data });
    console.log("resData", res.data);
  } catch (error) {
    dispatch({ type: EDIT_COMMENT_FAIL, payload: error.response.data });
  }
};
