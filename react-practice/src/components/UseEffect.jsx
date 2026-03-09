import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setcount] = useState(0);
    const [name, setname] = useState("");


  useEffect(() => {
    console.log("Count updated to: " + name);
  }, [name]);

  return(
  <div>
    <p>Counter</p>
    <label >Name:</label>
    <input type="text"  value={name} onChange={(e)=>setname(e.target.value)}/>
    <p>Count: {count}</p>
    <button onClick={()=>setcount(count+1)}>Count</button>
  </div>
  )}

export default UseEffect;
