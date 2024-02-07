import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import FilterExpense from "../FilterExpense/FilterExpense";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2000");
  const getYear = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <FilterExpense selected={selectedYear} onGetYear={getYear} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      ))}
    </Card>
  );
};

export default Expenses;
