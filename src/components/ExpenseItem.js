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
        <li className="">
            {props.name}
            <div>
                <span className="">
                    ${props.cost}
                    <TiDelete size='1.3em' onClick={handleDeleteExpense}></TiDelete>
                </span>
            </div>
        </li>
        </>
    )
}

export default ExpenseItem;