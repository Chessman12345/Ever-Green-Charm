import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import SortPopup from "../SortPopup/SortPopup";
import { setSortBy } from "../../redux/action/filter";
import "./Categories.css";

const sortItems = [
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

const Categories = React.memo(function Categories({
  activeItem,
  items,
  onClickItem,
  onClickSortType,
}) {
  const { sortBy } = useSelector(({ filter }) => filter);

  return (
    <>
      <div className="Categories__wrapper">
        <div className="Categories__container">
          <ul>
            <li
              className={activeItem === null ? "active" : ""}
              onClick={() => onClickItem(null)}
            >
              Все
            </li>
            {items &&
              items.map((item, index) => (
                <li
                  className={activeItem === index ? "active" : ""}
                  onClick={() => onClickItem(index)}
                  key={`${item}_${index}`}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <SortPopup
          activeSortByType={sortBy}
          items={sortItems}
          onClickSortType={onClickSortType}
        />
      </div>
    </>
  );
});

Categories.propTypes = {
  activeItem: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickItem: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeItem: null, items: [] };

export default Categories;
