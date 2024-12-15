import React from "react";
import HomePage from "./components/HomePage/HomePage";
import BasketPage from "./components/Basket/Basket";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5173/Cart.json")
      .then((resp) => resp.json())
      .then((json) => {
        setProducts(json.products);
      });
  }, []);

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
