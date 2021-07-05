import React from 'react';
import Budget from './components/Budget';
import Balance from './components/Balance';
import Expenses from './components/Expenses';
import ExpensesList from './components/ExpensesList';
import ExpenseForm from './components/ExpenseForm';
import { AppProvider} from './Context/Context';


function App() {
  return (
    <AppProvider>
    <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget/>
        </div>
        <div className="col-sm">
          <Balance/>
        </div>
        <div className="col-sm">
          <Expenses/>
        </div>
      </div>
      <h2 className="mt-3">Expenses</h2>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpensesList/>
        </div>
      </div>
      <h2 className="">Add Your Expense</h2>
      <div className='mt-3'>
        <div className='col-sm'>
          <ExpenseForm/>
        </div>
      </div>
    </div>
    </AppProvider>
  );
}

export default App;