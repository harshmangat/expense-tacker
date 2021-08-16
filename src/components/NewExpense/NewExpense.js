import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
  const [Editing, setEditing] = useState(false)
  
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData)
    props.onAddExpense(expenseData);
    setEditing(false);
  };
  const EditingHandler = () => {
    setEditing(true)
  }

  const stopEditingHandler = () => {
    setEditing(false);
  }
  return (
    <div className="new-expense">
     {!Editing && <button onClick={EditingHandler}>Add New Expense</button>}
      {Editing && <ExpenseForm  onSaveExpenseData={saveExpenseData} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
