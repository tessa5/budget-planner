import React, { useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import { Context } from '../Context/Context';

const ExpensesList = () => {
    const {expenses }= useContext(Context);
    return(
        <ul>
            {expenses.map((expense)=>(
                <ExpenseItem
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
                />
            ))}
        </ul>
    )
}

export default ExpensesList;