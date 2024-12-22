import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import BasketPage from "./components/Basket/Basket";

import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route index element={<Navigate to="/Home" replace />} />
          <Route path="Home" element={<HomePage />} />
          <Route path="/Basket" element={<BasketPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
