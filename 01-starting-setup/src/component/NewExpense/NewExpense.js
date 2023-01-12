import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  function NewExpenseData(expenseData) {
    const NewExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddNewData(NewExpenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveForm={NewExpenseData} />
    </div>
  );
}
export default NewExpense;
