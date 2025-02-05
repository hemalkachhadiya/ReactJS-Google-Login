import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter, Router } from "react-router-dom";
import { DemoContextProvider } from "./Context/DemoContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DemoContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </DemoContextProvider>
  </StrictMode>
);
