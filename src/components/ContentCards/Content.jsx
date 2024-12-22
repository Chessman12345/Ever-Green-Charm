import React from "react";
import { useDispatch, useSelector } from "react-redux";

import RenderProduct from "./RenderProduct/RenderProduct";
import ProductCart from "./ProductCart/ProductCart";
import { addProduct } from "../../redux/action/backet";
import "./Content.css";

function Content({ items }) {
  const dispatch = useDispatch();
  const isRender = useSelector(({ product }) => product.isRender);
  const backetItems = useSelector(({ backet }) => backet.items);

  const addProductToBacket = (obj) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: obj,
    });
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__title">
          <h1>Все продукции</h1>
        </div>
        <div className="content__container">
          {isRender
            ? items.map((item) => (
                <ProductCart
                  AddBacket={addProductToBacket}
                  key={item.id}
                  backetCount={
                    backetItems[item.id] && backetItems[item.id].items.length
                  }
                  {...item}
                />
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
