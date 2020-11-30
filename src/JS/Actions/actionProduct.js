import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  SEARCH_PRODUCT,
} from "../Constants/actions-types";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    await axios
      .get("/getAllProducts")
      .then((res) =>
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: res.data })
      );
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const saveProduct = (newProduct) => (dispatch) => {
  axios
    .post("/addproducts", newProduct)

    .catch((err) => console.log(err));
};

export const detailsProduct = (productName) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productName });
    const { data } = await axios.get("/api/products/" + productName);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

export const removeProduct = (id) => (dispatch) => {
  axios
    .delete(`/deleteproduct/${id}`)
    .then((res) => dispatch(listProducts()))
    .catch((err) => console.log(err));
};

export const updateProduct = (id, updateProd) => (dispatch) => {
  axios
    .put(`/updateproduct/${id}`, updateProd)
    .then((res) => dispatch(listProducts()))
    .catch((err) => console.log(err));
};

export const searchProduct = (payload) => {
  return {
    type: SEARCH_PRODUCT,
    payload,
  };
};
