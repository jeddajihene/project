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
import axios from "axios";
//photographer actions//
export const getPhotographerAction = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get("/api/servicesCards/getphotographers");
    dispatch({ type: GET_PHOTOGRAPHER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PHOTOGRAPHER_FAIL, payload: error.response.data });
  }
};

//decorator action//
export const getDecoratorAction = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get("/api/servicesCards/getdecorator");
    dispatch({ type: GET_DECORATOR_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_DECORATOR_FAIL, payload: error.response.data });
  }
};

//pastry action//
export const getPastryAction = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get("/api/servicesCards/getpastrys");
    dispatch({ type: GET_PASTRY_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PASTRY_FAIL, payload: error.response.data });
  }
};
//animator action//
export const getAnimatorAction = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get("/api/servicesCards/getanimator");
    dispatch({ type: GET_ANIMATOR_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ANIMATOR_FAIL, payload: error.response.data });
  }
};
