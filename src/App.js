import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const date = new Date();
  const expenses = [
    {
      id: "e1",
      date: new Date(2024, 0, 30),
      title: "Buy Laptop",
      price: 100000,
    },
    { id: "e2", date: new Date(2023, 3, 29), title: "Buy Phone", price: 25000 },
    {
      id: "e3",
      date: new Date(2022, 8, 20),
      title: "Buy Mazda CX-5",
      price: 3500000,
    },
  ];

  const addExpense = (expense) => {
    console.log("App.js");
    console.log(expense);
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
