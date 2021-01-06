import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
