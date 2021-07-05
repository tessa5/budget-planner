import React, { useContext} from 'react';
import { Context } from '../Context/Context';

const Budget = () => {
    const  { budget} = useContext(Context);
    return(
        <div className="">
            <span>Buget: ${budget}</span>
        </div>
    )
}
export default Budget;