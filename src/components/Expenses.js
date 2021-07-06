import React, { useContext } from 'react';
import { Context } from '../Context/Context';

const Expenses = () => {
    const { expenses } = useContext(Context);

    const total = expenses.reduce((total, item) => {
        return( total += item.cost );
    }, 0);
    return(
        <div className="">
            <span> Spent this month: ${total}</span>
        </div>
    )
}

export default Expenses;