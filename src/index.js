import { Provider } from "react-redux"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import store from "./store/store"

import "./index.scss"
import "./techColors.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


