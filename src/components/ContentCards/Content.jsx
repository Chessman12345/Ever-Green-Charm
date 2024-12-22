import React from "react";
import { useSelector } from "react-redux";

import RenderProduct from "./RenderProduct/RenderProduct";
import ProductCart from "./ProductCart/ProductCart";
import "./Content.css";

function Content({ items }) {
  const isRender = useSelector(({ product }) => product.isRender);

  return (
    <div className="content">
      <div className="container">
        <div className="content__title">
          <h1>Все продукции</h1>
        </div>
        <div className="content__container">
          {isRender
            ? items.map((item) => (
                <ProductCart key={item.id} {...item} isRender={true} />
              ))
            : Array(24)
                .fill(0)
                .map((_, index) => <RenderProduct key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default Content;
