import React from "react";
import EmptyBasketImage from "../../../img/EmptyCart.png";
import ChTree from "../../../img/ChTree.png";
import { Link } from "react-router-dom";
import "./Basket.css";
import Header from "../HeaderAndBasketButton/Header";

const Basket = () => {
  return (
    <div className="BasketPage">
      <Header />
      <div className="BasketPage__content">
        <h1>Корзина</h1>
      </div>
    </div>
  );
};
export default Basket;
