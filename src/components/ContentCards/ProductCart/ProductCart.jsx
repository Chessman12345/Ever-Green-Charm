import React from "react";
import PropTypes from "prop-types";

import RenderProduct from "../RenderProduct/RenderProduct";
import "./ProductCart.css";

function ProductCart({ imageUrl, name, price, sizes, isRender }) {
  const [activeItem, setActiveItem] = React.useState(sizes[0]);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="product-block">
      <img className="product-block__image" src={imageUrl} alt="" />
      <h4 className="product-block__title">{name}</h4>
      <div className="product-block__selector">
        <ul>
          {sizes.map((item, index) => (
            <li
              key={item}
              onClick={() => onSelectItem(index)}
              className={
                activeItem === index
                  ? "product-block__selector--item active"
                  : "product-block__selector--item"
              }
            >
              {item} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="product-block__bottom">
        <div className="product-block__price">
          <span className="product-block__price-text">от {price} BYN</span>
        </div>
        <button className="button button--outline button--add">
          <span className="button--add-text">Добавить</span>
        </button>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  sizes: PropTypes.arrayOf(PropTypes.number),
};

ProductCart.defaultProps = {
  name: "-",
  price: 0,
  sizes: [],
};

export default ProductCart;