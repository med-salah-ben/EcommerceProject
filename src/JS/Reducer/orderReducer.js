import {
  LIST_SHIPPING_SUCCESS,
  LIST_SHIPPING_FAIL,
  SEARCH_ORDER,
} from "../Constants/actions-types";

const initialState = {
  Shipping: [],
  error: "",
  searchInput: "",
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_SHIPPING_SUCCESS:
      return {
        ...state,
        Shipping: action.payload,
      };
    case LIST_SHIPPING_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SEARCH_ORDER:
      return {
        ...state,
        searchInput: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
