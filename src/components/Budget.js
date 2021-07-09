import React, { useContext, useState} from 'react';
import Budgetedit from './Budgetedit';
import Viewbudget from './Viewbudget';
import { Context } from '../Context/Context';

const Budget = () => {
    const  { budget, dispatch } = useContext(Context);
    const [editing, setEditing] = useState(false);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setEditing(false);
    };

    return(
        <div className="">
            {editing ? (
                <Budgetedit handleSaveClick = {handleSaveClick} budget = {budget}/>
            ): (
                <Viewbudget handleEditClick= {handleEditClick} budget={budget}/>
            )}
        </div>
    );
};
export default Budget;