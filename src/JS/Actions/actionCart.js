import {
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_LIST_FAIL,
  CART_LIST_CONFIRM,
} from "../Constants/actions-types";
import axios from "axios";

export const listCart = (userId) => (dispatch) => {
  try {
    dispatch({ type: CART_LIST_REQUEST });
    axios
      .get(`/getusercart?userId=${userId}`)
      .then((res) => dispatch({ type: CART_LIST_SUCCESS, payload: res.data }));
  } catch (error) {
    dispatch({ type: CART_LIST_FAIL, payload: error.message });
    console.log(error);
  }
};

export const confirmItem = (id, userId) => (dispatch) => {
  try {
    axios
      .put(`/confirm/${id}`)
      .then((res) => dispatch({ type: CART_LIST_REQUEST }));
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (id) => (dispatch) => {
  axios
    .delete(`/deleteItem/${id}`)
    .then((res) => dispatch(listCart()))
    .catch((err) => console.log(err));
};

export const listConfirmCart = (userId) => (dispatch) => {
  try {
    dispatch({ type: CART_LIST_REQUEST });
    axios
      .get(`/getconfirmitem?userId=${userId}`)
      .then((res) => dispatch({ type: CART_LIST_CONFIRM, payload: res.data }));
  } catch (error) {
    dispatch({ type: CART_LIST_FAIL, payload: error.message });
    console.log(error);
  }
};

export const listAllConfirmCart = () => (dispatch) => {
  try {
    dispatch({ type: CART_LIST_REQUEST });
    axios
      .get("/getallconfirmitem/")
      .then((res) => dispatch({ type: CART_LIST_CONFIRM, payload: res.data }));
  } catch (error) {
    dispatch({ type: CART_LIST_FAIL, payload: error.messagelistCart });
    console.log(error);
  }
};

export const removeFromOrderList = (id) => (dispatch) => {
  axios
    .delete(`/deleteFromOrder/${id}`)
    .then((res) => dispatch(listAllConfirmCart()))
    .catch((err) => console.log(err));
};
