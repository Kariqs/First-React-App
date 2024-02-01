import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
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
  return (
    <div className="main">
      <h2 className="h2">Expense Tracker</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
