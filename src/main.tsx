import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./assets/styles/index.css";
import { Card } from "./components/Card/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/username/:user" element={<Card />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
