import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App/App";
import "./i18n/config";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

