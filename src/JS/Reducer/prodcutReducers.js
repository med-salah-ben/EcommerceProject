import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_UPDATE_SUCCESS,
  SEARCH_PRODUCT,
} from "../Constants/actions-types";

const initialState = {
  Products: [],
  searchInput: "",
  error: "",
};

export const productreducers = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        Products: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        Products: action.payload,
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        searchInput: action.payload,
      };

    default:
      return state;
  }
};

export default productreducers;
