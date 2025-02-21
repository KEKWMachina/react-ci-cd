import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import "./index.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/react-ci-cd" element={<App />} />
        <Route
          path="/*"
          element={<Navigate to="/react-ci-cd" replace />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
