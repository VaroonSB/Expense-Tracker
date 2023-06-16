import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(2020);
  const updateYearHandler = (year) => {
    setFilterYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onUpdateFilterYear={updateYearHandler}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
