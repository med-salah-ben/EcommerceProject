import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducers from "./prodcutReducers";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  authReducer,
  productReducers,
  cartReducer,
  orderReducer,
});
