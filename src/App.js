import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpense = [
  { id: "e2", title: "New Monitor", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car EMI",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Dining",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e1",
    title: "Gym Fees",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpense);

  const addExpenseHandler = (expense) => {
    // console.log('in app js');
    // console.log(expense)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
