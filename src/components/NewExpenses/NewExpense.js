import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const formSubmitHandler = (formInputs) => {
    const expense = {
      ...formInputs,
      id: Math.random(),
    };
    props.onAddExpense(expense);
    setShowForm(false);
  };
  const expandExpenseForm = () => {
    setShowForm(true);
  };
  const hideExpenseForm = () => {
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={expandExpenseForm}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSubmitForm={formSubmitHandler}
          onCancel={hideExpenseForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
