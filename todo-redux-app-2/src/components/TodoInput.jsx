import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/actions';

function TodoInput() {
    const [todoData, settodoData] = useState("")
    let dispatch = useDispatch();

    return (
        <div>
            <h1>React Todo App</h1>
            <input type="text" placeholder='Enter todo item' value={todoData} onChange={(event)=>settodoData(event.target.value)} />
            <button onClick={()=>{dispatch(addTodo(todoData)); settodoData("");}}>Add ➕</button>
        </div>
    )
}

export default TodoInput
