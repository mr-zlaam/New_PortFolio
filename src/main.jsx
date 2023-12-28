import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ThemeContextProvider from "./Context/ThemeContextProvider.jsx";
import Body from "./00_Parent/Body.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);
