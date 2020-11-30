import {
  LIST_SHIPPING_SUCCESS,
  LIST_SHIPPING_REQUEST,
  LIST_SHIPPING_FAIL,
  SEARCH_INPUT,
} from "../Constants/actions-types";
import axios from "axios";

export const saveShipping = (newShipping) => () => {
  axios.post("/shipping", newShipping).catch((err) => console.log(err));
};

export const listShippings = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_SHIPPING_REQUEST });
    await axios
      .get("/getAllorders")
      .then((res) =>
        dispatch({ type: LIST_SHIPPING_SUCCESS, payload: res.data })
      );
  } catch (error) {
    dispatch({ type: LIST_SHIPPING_FAIL, payload: error.message });
    console.log(error);
  }
};

export const searchHandler = (payload) => ({
  type: SEARCH_INPUT,
  payload,
});
