import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/global.scss";
import { CartProvider } from "./context/cart.jsx";
import AuthContextProvider from "./context/auth.jsx";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <AuthContextProvider>
        <App />
        <ToastContainer />
      </AuthContextProvider>
    </CartProvider>
  </React.StrictMode>
);
