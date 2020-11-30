import {
  CART_LIST_FAIL,
  CART_LIST_SUCCESS,
  CART_REMOVE_ITEM,
  CART_LIST_CONFIRM,
} from "../Constants/actions-types";

const initialState = {
  ListCart: [],
  ListConfirm: [],
  error: "",
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_LIST_SUCCESS:
      return {
        ...state,
        ListCart: action.payload,
      };
    case CART_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case CART_REMOVE_ITEM:
      return {
        ...state,
      };

    case CART_LIST_CONFIRM:
      return {
        ...state,
        ListConfirm: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
