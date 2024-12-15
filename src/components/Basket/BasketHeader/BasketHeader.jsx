import React from "react";
import ChTree from "../../../../img/ChTree.png";
import "./BasketHeader.css";
import { Link } from "react-router-dom";

function BasketHeader() {
  return (
    <div>
      <div className="HeaderBasket__logo-wrapper">
        <Link to="/Home">
          <div className="HeaderBasket__logo">
            <div className="HeaderBasket__lolo-image">
              <img src={ChTree} />
            </div>
            <div className="HeaderBasket__logo-title">
              <h1>EverGreenCharm</h1>
              <p>самый лучший магазин во вселенной</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BasketHeader;
