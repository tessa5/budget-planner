import React, {useState} from 'react'

const Budgetedit = (props) =>  {
    const [value, setValue] = useState(props.budget);
    return (
        <div>
            <input
                type="number"
                className="text-center text-black font-light text-2xl w-24 w-full"
                required="required"
                id="name"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button
                type="type"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded ml-8 mt-2"
                onClick={() =>props.handleSaveClick(value)}
            >Save</button>
        </div>
    );
};

export default Budgetedit
