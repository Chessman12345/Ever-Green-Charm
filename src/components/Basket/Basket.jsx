import React from "react";
import EmptyBasketImage from "../../../img/EmptyCart.png";
import ChTree from "../../../img/ChTree.png";
import { Link } from "react-router-dom";
import "./Basket.css";
import BasketHeader from "./BasketHeader/BasketHeader";

const Basket = () => {
  return (
    <div className="BasketPage">
      <BasketHeader />
      <div className="BasketPage__content">
        <h1>Корзина</h1>
      </div>
    </div>
  );
};
export default Basket;
