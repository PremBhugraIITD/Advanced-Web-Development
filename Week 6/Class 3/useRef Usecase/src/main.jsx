import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  //   <StrictMode>
  <App />
  //   </StrictMode>,
  //StrictMode intentionally double-invokes certain lifecycle methods, including useEffect, to help identify side effects.
);
