import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import App from "./App.tsx";
import VitePage from "./components/VitePage/VitePage.tsx";
import ReactPage from "./components/ReactPage/ReactPage.tsx";
import SubRoute from "./components/SubRoute/SubRoute.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="vite" element={<VitePage />} />
        <Route path="react">
          <Route index element={<ReactPage />} />
          <Route path=":id" element={<SubRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
