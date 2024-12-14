import React from "react";
import PropTypes from "prop-types";
import "./Categories.css";
import SortPopup from "../SortPopup/SortPopup";

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div className="wrapper">
        <div className="Categories">
          <ul>
            <li
              className={activeItem === null ? "active" : ""}
              onClick={() => onSelectItem(null)}
            >
              Все
            </li>
            {items &&
              items.map((item, index) => (
                <li
                  className={activeItem === index ? "active" : ""}
                  onClick={() => onSelectItem(index)}
                  key={`${item}_${index}`}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
    </>
  );
}

export default Categories;
