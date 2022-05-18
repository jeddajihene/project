import {
  CONTACT_US_SUCCESS,
  CONTACT_US_FAIL,
  REMOVE_ERROR
} from "../actionTypes/userActionTypes";
import axios from "axios";

//   contactus is parametre  lil iste9bel
export const contactUsAction = (contactUs) => async (dispatch) => {
  try {
    //contactus is state b3athneha lil back
    const res = await axios.post("/api/contactus", contactUs);
    dispatch({ type: CONTACT_US_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: CONTACT_US_FAIL, payload: error.response.data });
  }
};
//REMOVE  ERROR
// export const removeErrorAction = () => async (dispatch) => {
//   dispatch({ type: REMOVE_ERROR, payload: [] });
// };
