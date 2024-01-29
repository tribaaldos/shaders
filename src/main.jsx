import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { Leva } from 'leva';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Leva />
    <App />
  </React.StrictMode>
);
