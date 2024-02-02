import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  return (
    <form className="new-expense__controls">
      <div className="new-expense__control">
        <label>Expense Title</label>
        <input type="text" required />
      </div>
      <div className="new-expense__control">
        <label>Expense Amount</label>
        <input type="number" min="10" step="10" required />
      </div>
      <div className="new-expense__control">
        <label>Expense Date</label>
        <input type="date" min="2024-01-01" max={props.date} required />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
