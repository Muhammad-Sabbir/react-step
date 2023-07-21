import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DateCalculator from "./DateCalculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DateCalculator />
  </React.StrictMode>
);
