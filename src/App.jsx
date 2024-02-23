import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
let EXPENSES = [];
function App() {
  const date = new Date();
  const [expenses, setExpenses] = useState(EXPENSES);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
     return [...prevExpenses, expense];
    });
  };

  return (
    <div className="main">
      <h2 className="h2">Expense Tracker</h2>
      <NewExpense date={date} onAddExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
