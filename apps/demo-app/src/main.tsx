import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@sigil/design-tokens/dist/css/variables.css"; // <- Design token variables
import "./base.css"; //
import App from "./App";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
