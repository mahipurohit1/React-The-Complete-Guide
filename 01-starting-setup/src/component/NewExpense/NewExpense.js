import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [editingForm, setEditingForm] = useState(false);
  function NewExpenseData(expenseData) {
    const NewExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddNewData(NewExpenseData);
    setEditingForm(false);
  }
  const startFormHandler = function () {
    setEditingForm(true);
  };
  const stopFormHandler = function () {
    setEditingForm(false);
  };

  return (
    <div className="new-expense">
      {editingForm ? (
        <ExpenseForm
          onSaveForm={NewExpenseData}
          onStopFormHandler={stopFormHandler}
        />
      ) : (
        <div>
          <button onClick={startFormHandler}>Add Expense</button>
        </div>
      )}
    </div>
  );
}
export default NewExpense;
