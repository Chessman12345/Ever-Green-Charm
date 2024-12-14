import React from "react";
import "./Header.css";

const BasketButton = ({ children }) => {
  return (
    <>
      <button className="button">{children}</button>
    </>
  );
};

export default BasketButton;
