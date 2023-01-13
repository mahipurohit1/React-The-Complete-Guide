import React from "react";
import styled from "../UI/Card.module.css";
const Card = function (props) {
  const classes = `${styled.card} ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
