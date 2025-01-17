import React from "react";
import ReactDOM from "react-dom";
import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers"
import "./index.css";
import App from "./App";
const store = createStore(rootReducer, devToolsEnhancer())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);