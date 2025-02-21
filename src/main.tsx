import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import "./index.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/artifact-tracker" element={<App />} />
        <Route
          path="/*"
          element={<Navigate to="/artifact-tracker" replace />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
