import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> {/* Wrap App component with StrictMode for better development checks */}
    <App />
  </React.StrictMode>
);
