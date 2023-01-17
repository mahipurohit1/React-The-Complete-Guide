import React from "react";
import style from "./Header.module.css";
import Button from "../UI/Button";

function Header() {
  return (
    <header className={style.header}>
      <Button>Add task</Button>
      <div>form</div>
    </header>
  );
}

export default Header;
