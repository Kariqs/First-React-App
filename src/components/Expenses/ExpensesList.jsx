import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {
  let expenseContainer = <p>No Expenses for The Selected Year.</p>;

  if (props.items.length > 0) {
    expenseContainer = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        price={expense.amount}
      />
    ));
  }

  return <ul className="expenses-list">{expenseContainer}</ul>;
};

export default ExpensesList;
