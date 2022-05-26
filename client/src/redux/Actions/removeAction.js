import { REMOVE } from "../actionTypes/userActionTypes";

export const removeAction = () => async (dispatch) => {
  dispatch({ type: REMOVE });
};
