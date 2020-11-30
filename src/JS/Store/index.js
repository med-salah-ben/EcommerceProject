import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducer from "../Reducer";

const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const store = createStore(
  combineReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
