// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import App from "./App";
import "./index.css"; // Import global styles

// Ensure there is an element with id="root" in index.html
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Could not find root element. Check index.html!");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
