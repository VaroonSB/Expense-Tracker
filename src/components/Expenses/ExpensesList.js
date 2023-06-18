import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (!props.expenses.length) {
    return (
      <div>
        <h2 className="expenses-list__fallback">No expenses found!</h2>
      </div>
    );
  }

  return (
    <div>
      <ul className="expenses-list">
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
