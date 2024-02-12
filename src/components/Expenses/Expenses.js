import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import FilterExpense from "../FilterExpense/FilterExpense";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const getYear = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <FilterExpense selected={selectedYear} onGetYear={getYear} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      ))}
    </Card>
  );
};

export default Expenses;
