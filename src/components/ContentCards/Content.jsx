import React from "react";
import "./Content.css";
import ProductCart from "./ProductCart/ProductCart";

function Content() {
  return (
    <div className="content">
      <div className="container">
        <div className="content__title">
          <h1>Все продукции</h1>
        </div>
        <div className="content__container">
          <ProductCart />
        </div>
      </div>
    </div>
  );
}

export default Content;
