import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/index.css";
import { User } from "./templates/User/index.tsx";
import { Home } from "./templates/Home/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/username/:user" element={<User />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
