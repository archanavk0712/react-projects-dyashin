import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
      setTimeout(() => {
        setCount(count+1)
      }, 1000);
    }, [count])
    
  return (
    <div>
      <h1>Counter:{count}</h1>
      
    </div>
  )
}

export default Counter

