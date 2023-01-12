import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const [title, SetTitle] = useState(props.title);

  function clickHandler() {
    SetTitle("update");
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
        <button onClick={clickHandler}>click me</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
