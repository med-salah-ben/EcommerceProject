import {
  REGISTER_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  ISAUTH_FAIL,
  ISAUTH_USER,
  ISAUTH_SUCCESS,
  GET_USER,
  ORDER_LIST_ADMIN,
  USER_DELETE_SUCCESS,
} from "../Constants/actions-types";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const register = (user) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });
  try {
    const registerResult = await axios.post("/register", user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: registerResult.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.errors,
    });
  }
};

export const login = (userCred) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const loginResult = await axios.post("/login", userCred);
    localStorage.setItem("token", loginResult.data.token);
    const result = jwt_decode(loginResult.data.token);
    const role = sessionStorage.setItem("role", loginResult.data.role);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        id: result.id,
        role: role,
        name: loginResult.data.name,
      },
    });
    console.log(loginResult.data);
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.errors,
    });
  }
};

// export const home = () => {
//   axios.get("/home").catch((error) => console.log(error));
// };

export const isAuthorized = () => async (dispatch) => {
  dispatch({
    type: ISAUTH_USER,
  });
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const isAuthResult = await axios.get("/home", config);
    dispatch({
      type: ISAUTH_SUCCESS,
      payload: isAuthResult.data,
    });
  } catch (error) {
    dispatch({
      type: ISAUTH_FAIL,
    });
  }
};

export const getUser = (id) => (dispatch) => {
  axios
    .get(`/user/${id}`)
    .then((res) => dispatch({ type: GET_USER, payload: res.data }))
    .catch(console.error());
};

export const getAllUsers = () => (dispatch) => {
  axios
    .get("/allusers")
    .then((res) => dispatch({ type: ORDER_LIST_ADMIN, payload: res.data }))
    .catch(console.error());
};

export const addAdmin = (newAdmin) => (dispatch) => {
  axios
    .post("/addadmin", newAdmin)
    // .then((res) => dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`/deleteUser/${id}`)
    .then((res) => dispatch(getAllUsers()))
    .catch((err) => console.log(err));
};
