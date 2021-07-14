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
        });

        setName('');
        setCost('');
    };

    return(
        <form onSubmit={onSubmit}>
            <div className="bg-gray-200">
                <div className="block px-4 py-2 text-center text-black text-lg">
                    <label for="name">Name</label>
                    <input 
                    required='required'
                    text="text"
                    className="ml-2 text-center w-48"
                    id='name'
                    value={name}
                    onChange={ (event)=> setName(event.target.value)}
                    ></input>    
                </div>
                <div className='block px-4 py-2 ml-3 text-center text-black text-lg'>
                <label for="cost">Cost</label>
                    <input 
                    required='required'
                    text="text"
                    className="ml-2 text-center w-48"
                    id='cost'
                    value={cost}
                    onChange={ (event)=> setCost(event.target.value)}
                    ></input>  
                </div>
                <div className='block px-4 py-2 text-center text-black text-lg'>
                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;