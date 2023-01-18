import React from "react";
import style from "./Header.module.css";
import Button from "../UI/Button";
import Form from "./Form";

function Header(props) {
  return (
    <header className={style.header}>
      <Button type="button" onClick={props.onShowModal}>
        Add task
      </Button>
      <div>
        <Form />
      </div>
    </header>
  );
}

export default Header;
