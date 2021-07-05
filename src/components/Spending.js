import { assertTSConstructSignatureDeclaration } from '@babel/types';
import React, {useContext} from 'react';
import { Context } from '../Context/Context';


const Spending = () => {
    const { expenses} = useContext(Context);

    const totalExpense = expenses.reduce((total, item)=> {
        return (total += item.cost);
    },0);

    return(
        <div className="">
            <span>
                Spending : ${totalExpense}
            </span>
        </div>
    )
}

export default Spending;