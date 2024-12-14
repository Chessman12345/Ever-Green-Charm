import React from "react";
import Header from "../HeaderAndBasketButton/Header";
import Categories from "../Categories/Categories";
import "./HomePage.css";
import Content from "../ContentCards/Content";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePage__container">
        <Header />
        <Categories
          items={[
            "Ели",
            "Сосны",
            "Украшения",
            "Гирлянды",
            "Статуэтки",
            "Подсвечники",
          ]}
          onClickItem={(item) => console.log(item)}
        />
        <Content />
      </div>
    </div>
  );
};

export default HomePage;
