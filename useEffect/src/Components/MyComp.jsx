import React, { useEffect, useState } from 'react'

function MyComp() {
    const [fName, setfName] = useState("");

    useEffect(() => {
     console.log("First useEffect executed");
    }, [])

    useEffect(() => {
      console.log("Second useEffect executed");
    }, [fName])
    
    useEffect(() => {
      return () => {
        console.log("Third useEffect executed");
      }
    }, [])

  return (
    <div>
      <h1>Hello,{fName}</h1>
      <button onClick={()=>setfName("Harry")}>Change Name</button>
    </div>
  )
}

export default MyComp
