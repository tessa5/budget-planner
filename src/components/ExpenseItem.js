import React, {useContext} from 'react';
import { TiDelete} from 'react-icons/ti';
import { Context } from '../Context/Context';


const ExpenseItem = (props) => {
    const { dispatch} = useContext(Context);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
                });
    };
    return(
        <>
        <li className="flex bg-gray-200">
            <div className="flex-1 bg-blue-600 text-white my-2 ml-2 px-4 py-2"> {props.name} </div>
            <div className="flex-1 bg-blue-900 text-white my-2 px-4 py-2">${props.cost}</div>
            <div className="bg-red-500 text-white my-2 mr-2 px-4 py-2">
                    <TiDelete size='1.3em' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
        </>
    )
}

export default ExpenseItem;