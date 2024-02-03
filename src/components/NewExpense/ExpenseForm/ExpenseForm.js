import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={formSubmitHandler} className="new-expense__controls">
      <div className="new-expense__control">
        <label>Expense Title</label>
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
          required
        />
      </div>
      <div className="new-expense__control">
        <label>Expense Amount</label>
        <input
          type="number"
          value={enteredAmount}
          onChange={amountChangeHandler}
          min="10"
          step="10"
          required
        />
      </div>
      <div className="new-expense__control">
        <label>Expense Date</label>
        <input
          type="date"
          value={enteredDate}
          onChange={dateChangeHandler}
          min="2024-01-01"
          max={props.date}
          required
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
