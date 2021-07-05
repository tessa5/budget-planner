
import { createContext, useReducer} from 'react';

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
            }
        default:
            return state;
    }
};
const initialState = {
    budget: 380,
    expenses: [
        { id:7, name: 'Rent', cost: 120},
        { id:7, name: 'Rent', cost: 120},
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