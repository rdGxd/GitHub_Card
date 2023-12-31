import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/index.css";
import { Home } from "./templates/Home/index.tsx";
import { User } from "./templates/User/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:user" element={<User />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
