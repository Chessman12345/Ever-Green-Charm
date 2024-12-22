import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../HeaderAndBasketButton/Header";
import Categories from "../Categories/Categories";
import Content from "../ContentCards/Content";
import { requestProduct } from "../../redux/action/product";
import { setCategory, setSortBy } from "../../redux/action/filter";

import "./HomePage.css";

const categoriesItem = [
  "Ели",
  "Сосны",
  "Украшения",
  "Статуэтки",
  "Подсвечники",
];

const HomePage = () => {
  const dispatch = useDispatch();
  const productItems = useSelector(({ product }) => product.items);
  const { category, sortBy } = useSelector(({ filter }) => filter);

  React.useEffect(() => {
    dispatch(requestProduct(sortBy, category));
  }, [sortBy, category]);

  const selectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const selectSortName = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="HomePage">
      <div className="HomePage__container">
        <Header />
        <Categories
          activeItem={category}
          onClickItem={selectCategory}
          items={categoriesItem}
          onClickSortType={selectSortName}
        />
        <Content items={productItems} />
      </div>
    </div>
  );
};

export default HomePage;
