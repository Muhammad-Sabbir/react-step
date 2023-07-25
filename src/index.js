import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DateCalculator from "./DateCalculator2";
import TipCalculator from "./TipCalculator";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TipCalculator />
  </React.StrictMode>
);
