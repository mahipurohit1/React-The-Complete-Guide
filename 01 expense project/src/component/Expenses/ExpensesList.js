import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.filterExpense.length === 0) {
    return <h2 className="expenses-list__fallback"> No Data Founds</h2>;
  }

  if (props.filterExpense.length > 0) {
    return props.filterExpense.map((element) => {
      return (
        <ul className="expenses-list ">
          <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        </ul>
      );
    });
  }
}
export default ExpensesList;
