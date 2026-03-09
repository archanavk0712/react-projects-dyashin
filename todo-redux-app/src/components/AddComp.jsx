import React, { useState } from 'react'
import ViewComp from './ViewComp';
import { addData as addDataAction} from '../slices/dataSlice'; 
import { useDispatch } from 'react-redux';

function AddComp() {
    const [input, setinput] = useState("")
    const dispatch= useDispatch();
    function addData() {
        if (input) {
            dispatch(addDataAction(input))
            setinput("")
        }
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />
            <button onClick={() => addData()}>Add+</button>
        </div>
    )
}

export default AddComp
