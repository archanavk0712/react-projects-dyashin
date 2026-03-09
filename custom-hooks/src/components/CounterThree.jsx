import React, { useReducer } from 'react'

function CounterThree() {

    const reducer=(prevState, action)=>{
        console.log("PreviousState: ",prevState);
        console.log("Action: ",action);
        switch (action.type) {
            case "INCREMENT":
                return prevState + action.payload;
                break;

            case "DECREMENT":
                return prevState - action.payload;
                break;

            case "RESET":
                return action.payload;
                break;
        }
    }

const [state, dispatch] = useReducer(reducer, 10)

  return (
    <div>
      <h1>Counter Three: {state}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT" , payload:5})}>Increment</button>
      <button onClick={()=>dispatch({type:"DECREMENT", payload:2})}>Decrement</button>
      <button onClick={()=>dispatch({type:"RESET", payload:10})}>Reset</button>
    </div>
  )
}

export default CounterThree
