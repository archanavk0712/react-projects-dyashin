import React, { useEffect, useState } from 'react'

function BirdsComp() {
    const [birds, setbirds] = useState([])
    useEffect(() => {
        console.log(birds);
    }, [birds])
    
    const insert=()=>{
       let p= prompt("Enter the bird name");
       setbirds([...birds,p])
       
       
    }

  return (
    <div>
      <button onClick={()=>insert()}>Add birds</button>
      <ul>
        {birds.map((val,ind)=>{
            return <li key={ind}>{val}</li>
        })}
      </ul>
     
    </div>
  )
}

export default BirdsComp
