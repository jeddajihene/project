import axios from "axios";
import {
  ADD_OFFER_SUCCESS,
  ADD_OFFER_FAIL,
  DELETE_OFFER_SUCCESS,
  DELETE_OFFER_FAIL,
  LOADING
} from "../actionTypes/userActionTypes";
export const addOfferAction = (addOffer, offerImage) => async (dispatch) => {
  let formData = new FormData();
  formData.append("offerImage", offerImage);
  formData.append("addOffer", JSON.stringify(addOffer));
  // dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/offer/addoffer", formData);
    dispatch({ type: ADD_OFFER_SUCCESS, payload: res.data });
    console.log("resData", res.data);
  } catch (error) {
    dispatch({ type: ADD_OFFER_FAIL, payload: error.response.data });
  }
};

// delete offer
export const deleteOfferAction = (id) => async (dispatch) => {
  try {
    const res = await axios.delete("/api/offer/deleteoffer/" + id);
    dispatch({ type: DELETE_OFFER_SUCCESS, payload: res.data });
    console.log("resData", res.data);
  } catch (error) {
    dispatch({ type: DELETE_OFFER_FAIL, payload: error.response.data });
  }
};
