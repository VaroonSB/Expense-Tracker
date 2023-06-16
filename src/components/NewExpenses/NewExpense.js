import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const formSubmitHandler = (formInputs) => {
    const expense = {
      ...formInputs,
      id: Math.random(),
    };
    props.onAddExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitForm={formSubmitHandler} />
    </div>
  );
};

export default NewExpense;
