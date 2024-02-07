import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeProvider from "./Theme/MainThemeIndex";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider>
    <ToastContainer position="bottom-right" transition={Zoom} />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
