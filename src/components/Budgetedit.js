import React, {useState} from 'react'

const Budgetedit = (props) =>  {
    const [value, setValue] = useState(props.budget);
    return (
        <div>
            <input
                type="number"
                className="ml-2 text-center text-black font-light text-2xl"
                required="required"
                id="name"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button
                type="type"
                className=""
                onClick={() =>props.handleSaveClick(value)}
            >Save</button>
        </div>
    );
};

export default Budgetedit
