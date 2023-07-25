import React from 'react';
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense';

function App() {

  const expenses = [
    {edate:new Date(2023,6,19), expensename:'Rent' , amount: 10000},
    {edate:new Date(2023,6,19), expensename: 'Food', amount: 3000}
    ];
  return (
    <div className="App">
     <div>
          <h1>React Example</h1>
      </div> 

      <h1>Expenses</h1>

      <NewExpense></NewExpense>
      <h4>DATE  EXPENSE AMOUNT</h4>
      
      <Expenses
        expdate ={expenses[0].edate}
        exptype = {expenses[0].expensename}
        expamt = {expenses[0].amount}
        >
      </Expenses>
      <Expenses
       expdate ={expenses[1].edate}
        exptype = {expenses[1].expensename}
        expamt = {expenses[1].amount}>
      </Expenses>
    </div>
  );
}

export default App;
