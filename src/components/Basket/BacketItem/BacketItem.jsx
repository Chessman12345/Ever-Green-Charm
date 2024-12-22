import React from "react";

function BacketItem({ id, name, size, price, totalCount, image, remove }) {
  const OnClickRemoveCard = () => {
    remove(id);
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={image} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p> {size} см.</p>
      </div>
      <div className="cart__item-count">
        <div className="button button--outline button--circle cart__item-count-minus">
          -
        </div>
        <b>{totalCount}</b>
        <div className="button button--outline button--circle cart__item-count-plus">
          +
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price} ₽</b>
      </div>
      <div className="cart__item-remove">
        <div
          className="button button--outline button--circle"
          onClick={OnClickRemoveCard}
        >
          <button className="Backet--circle">
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BacketItem;
