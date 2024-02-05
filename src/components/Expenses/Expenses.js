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
      <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        price={props.expenses[0].price}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        price={props.expenses[1].price}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        price={props.expenses[2].price}
      />
    </Card>
  );
};

export default Expenses;
