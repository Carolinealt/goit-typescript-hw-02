import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ImageContextProvider from "./components/Context.jsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ImageContextProvider>
      <App />
    </ImageContextProvider>
  </React.StrictMode>
);
