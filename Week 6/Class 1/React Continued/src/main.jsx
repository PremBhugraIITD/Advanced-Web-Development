import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App1, App2, App3, App4 } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App1 />
    <App2 />
    <App3 />
    <App4 />
  </StrictMode>
);
