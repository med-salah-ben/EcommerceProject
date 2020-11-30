import {
  REGISTER_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  ISAUTH_USER,
  ISAUTH_FAIL,
  ISAUTH_SUCCESS,
  GET_USER,
  ORDER_LIST_ADMIN,
  USER_DELETE_SUCCESS,
} from "../Constants/actions-types";
import jwt_decode from "jwt-decode";

const initialState = {
  isLoading: false,
  AllUsers: [],
  error: [],
  user: null,
  profile: [],
  id: localStorage.getItem("token")
    ? jwt_decode(localStorage.getItem("token")).id
    : null,
  listUser: [],
  role: sessionStorage.getItem("role") ? true : null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: true,
        id: payload.id,
        role: payload.role,
        name: payload.name,
      };
    case ISAUTH_USER:
      return {
        ...state,
        isLoading: true,
      };
    case ISAUTH_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case ISAUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: payload,
      };
    case GET_USER:
      return {
        ...state,
        listUser: payload,
      };
    case ORDER_LIST_ADMIN:
      return {
        ...state,
        AllUsers: payload,
      };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
