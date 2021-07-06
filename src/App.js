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
    <div className="container mx-auto px-8 bg-blue-800">
      <h1 className="mt-4 text-white text-center text-3xl p-4">My Budget Planner</h1>
      <div className="bg-gray-200 p-4 mt-3">
        <div className="block px-4 py-2 text-center text-white text-2xl bg-green-500">
          <Budget/>
        </div>
        <div className="block px-4 py-2 text-center text-white text-2xl bg-blue-600 mt-3">
          <Balance/>
        </div>
        <div className="block px-4 py-2 text-center text-white text-2xl bg-blue-900 mt-3">
          <Expenses/>
        </div>
      </div>
      <h2 className="mt-3 text-white text-center text-3xl p-2">Expenses</h2>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpensesList/>
        </div>
      </div>
      <h2 className="text-white text-center text-2xl p-2">Add Your Expense</h2>
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