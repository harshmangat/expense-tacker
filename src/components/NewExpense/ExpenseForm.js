import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTtitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*>we can use one state istead of many for different const< 
    const [userInput, setUserInput] = useState({
    enteredTtitle: "",
    enteredAmount: "",
    enteredAmount: "",
  });
  
  */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    /*
       // setUserInput({
      //   ...userInput,
      //   enteredTtitle : event.target.value,
      // })
    */

    // setUserInput((prevState) =>{
    //   return {...prevState,enteredTtitle: event.target.value}
    //this is the safer way to access the all current
    //value updates of previous variables
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    /*
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
    */
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    /*  setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
    */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTtitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTtitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
