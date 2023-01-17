import React from "react";
import styles from "./Header.module.css";
import headerImg from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = function () {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={headerImg} alt="A table of delicious Food item" />
      </div>
    </>
  );
};

export default Header;
