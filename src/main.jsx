import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import {App} from "./App";
import "./app.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
