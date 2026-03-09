import { useState } from "react";

const useCounter=(
    initialVal=0, 
    incrementVal=1, 
    decrementVal=1
)=>{
    const [count, setcount] = useState(initialVal)

    const increment=()=>{
        setcount(count + incrementVal);
    }

    const decrement=()=>{
        setcount(count - decrementVal);
    }

    const reset=()=>{
        setcount(initialVal);
    }

    return [count, increment,decrement,reset];
}
export default useCounter;