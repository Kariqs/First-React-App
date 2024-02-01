import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Habari yako.");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          <p>Kshs.{props.price}</p>
        </div>
      </div>
      <button onClick={clickHandler}>Click Me</button>
    </Card>
  );
};

export default ExpenseItem;
