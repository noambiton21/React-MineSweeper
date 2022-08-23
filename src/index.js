import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MineSweeper from "./components/MineSweeper";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <MineSweeper />
  </Provider>,
  document.getElementById("root")
);
