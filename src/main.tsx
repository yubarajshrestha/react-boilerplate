import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Application from "./application";

// Get the root element safely
const rootElement = document.getElementById("root");

// Only render if the element exists
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <div data-testid="main-container" className="main-container">
        <BrowserRouter>
          <Application />
        </BrowserRouter>
      </div>
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
