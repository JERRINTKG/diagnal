import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import MainRoute from "routes";
import store from "reducers";
import * as serviceWorker from "./serviceWorker";
import 'assets/styles/main.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainRoute />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
