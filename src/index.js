import React from "react";
import { render } from "react-dom";
import Root from "./config/routes.js";
import { Provider } from 'react-redux'
import store from "./store.js";

render(
  <Root store={store} />
  , document.getElementById("app"));
