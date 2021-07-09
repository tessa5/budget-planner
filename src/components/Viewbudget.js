import React from 'react'

const Viewbudget = (props) => {
    return (
        <div>
            <span>Budget: ${props.budget}</span>

            <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-16"
                onClick={props.handleEditClick}
            >Edit</button>
        </div>
    )
}

export default Viewbudget
