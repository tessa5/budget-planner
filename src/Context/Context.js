
import { createContext, useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],            
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense)=> expense.id !==action.payload)
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };

        default:
            return state;
    }
};
const initialState = {
    budget: 600,
    expenses: [
        { id: uuidv4(), name: 'Rent', cost: 120},
        { id: uuidv4(), name: 'transport', cost: 100},
    ],
};

export const Context = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <Context.Provider
        value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}
        >
            {props.children}
        </Context.Provider>
    )
};