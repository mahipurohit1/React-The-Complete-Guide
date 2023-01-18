import React from "react";
import style from "./Overlay.module.css";
function Overlay(props) {
  return (
    <div onClick={props.onHideModal} className={style.overlay}>
      {props.children}
    </div>
  );
}

export default Overlay;
