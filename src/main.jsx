import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CardDeck from "./App.jsx"; // Ensure this matches the export in App.jsx

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardDeck />
  </StrictMode>
);
