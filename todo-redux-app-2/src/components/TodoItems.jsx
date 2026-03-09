import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, UpdateTodo } from '../actions/actions';

function TodoItems() {
    let data = useSelector((store) => store.list)
    console.log(data);

    const [editIndex, seteditIndex] = useState(null)
    const [editValue, seteditValue] = useState("")
    let dispatch = useDispatch()
    return (
        <div>
            <h1>Todo Items</h1>
            <ul>
                {data.map((val, ind) => {
                    return (
                        <li key={ind}>
                            {editIndex == ind ? (
                                <div>
                                    <input type="text" value={editValue} onChange={(event) => seteditValue(event.target.value)} />
                                    <button onClick={() => { dispatch(UpdateTodo(ind, editValue)); seteditIndex(null); seteditValue("") }}>Save</button>
                                    <button onClick={()=>{seteditIndex(null); seteditValue("")}}>Cancel</button>
                                </div>
                            ):(
                                <div>
                            {val}
                            <button onClick={()=>{ seteditIndex(ind); seteditValue(val)}}>Edit</button>
                            {" "}
                            <button onClick={() => dispatch(deleteTodo(ind))}>Delete</button>
                            </div>)
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoItems
