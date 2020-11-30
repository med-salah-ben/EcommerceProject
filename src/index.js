import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./JS/Store";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
