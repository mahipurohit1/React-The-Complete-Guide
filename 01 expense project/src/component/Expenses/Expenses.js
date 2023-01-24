import { useState } from "react";
import "./Expense.css";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2019");
  function expenseFilterValue(yearValue) {
    setFilterYear(yearValue);
  }

  const filterExpense = props.expenses.filter(function (element) {
    return element.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseChart filterExpense={filterExpense} />
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={expenseFilterValue}
        />

        <ExpensesList filterExpense={filterExpense} />
      </Card>
    </li>
  );
}
export default Expenses;
