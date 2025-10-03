import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App, App2, App3, App4 } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <App2 />
    <App3 />
    <App4 />
  </StrictMode>
);
