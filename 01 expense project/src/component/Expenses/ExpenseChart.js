import React from "react";
import Chart from "../Chart/Chart";

function ExpenseChart(props) {
  const ExpenseDataPoints = [
    { label: "Jan", value: "0" },
    { label: "Feb", value: "0" },
    { label: "Mar", value: "0" },
    { label: "Apr", value: "0" },
    { label: "May", value: "0" },
    { label: "Jun", value: "0" },
    { label: "Jul", value: "0" },
    { label: "Aug", value: "0" },
    { label: "Sep", value: "0" },
    { label: "Oct", value: "0" },
    { label: "Nav", value: "0" },
    { label: "Dec", value: "0" },
  ];

  for (const Element of props.filterExpense) {
    const months = Element.date.getMonth();
    ExpenseDataPoints[months].value = Element.amount;
  }

  return <Chart dataPoints={ExpenseDataPoints} />;
}
export default ExpenseChart;
