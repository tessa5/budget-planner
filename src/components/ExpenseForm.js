import React, {useContext, useState} from 'react';
import { Context } from '../Context/Context';
import { v4 as uuidv4} from 'uuid';

const ExpenseForm = () => {
    const {dispatch} = useContext(Context);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        })
    };

    return(
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input 
                    required='required'
                    text="text"
                    className="form-control"
                    id='name'
                    value={name}
                    onChange={ (event)=> setName(event.target.value)}
                    ></input>    
                </div>
                <div className='col-sm'>
                <label for="cost">Cost</label>
                    <input 
                    required='required'
                    text="text"
                    className="form-control"
                    id='cost'
                    value={cost}
                    onChange={ (event)=> setCost(event.target.value)}
                    ></input>  
                </div>
                <div className='col-sm'>
                    <button type="submit" className=''>
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;