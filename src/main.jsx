import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./app/Store.js";
import { Toaster } from "react-hot-toast";
import { ScrollProvider } from "./context/ScrollContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <ScrollProvider>
        <App />
      </ScrollProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </Provider>
  </React.StrictMode>
);
