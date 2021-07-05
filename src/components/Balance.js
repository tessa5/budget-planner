import React, {useContext} from 'react';
import { Context } from '../Context/Context';
const Balance = () => {
    const { expenses, budget} = useContext(Context);

    const totalExpense = expenses.reduce((total, item)=> {
        return(total = total + item.cost)
    }, 0);

    const alertType = totalExpense > budget ? 'alert-danger' : 'alert'

    return(
        <div className={`alert ${alertType}`}>
            <span>
                Balance: ${budget- totalExpense}
            </span>
        </div>
    )
}

export default Balance;