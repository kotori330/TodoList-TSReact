import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // Start to run Javascript from strict mode component
  <StrictMode>
    <App />
  </StrictMode>
);
