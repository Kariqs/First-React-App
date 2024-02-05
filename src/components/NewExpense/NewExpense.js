import React from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm date={props.date} onSaveExpense={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
