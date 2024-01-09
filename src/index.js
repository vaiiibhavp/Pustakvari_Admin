import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import { colorCodes } from "./Helper/Constant";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  typography: {
    button: {
      style: {
        background: colorCodes?.PRIMARY_COLOR,

        textTransform: "none",
      },
    },
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
