import React, { useEffect, useState } from 'react'

function DetailsComp() {
    
    const [data, setData] = useState([])

    useEffect(() => {
        fetchUsers();
    }, [])
    
    const fetchUsers=async()=>{
        try {
            const response=await fetch("https://jsonplaceholder.typicode.com/users");
            const result =await response.json();
            setData(result);
        } catch (error) {
            console.error(error.message);
        }
    }
    
  return (
    <div>
      <h1>Users</h1>
        <h3>
            <ul>{data.map((val,ind)=>{
                return <li>{val.name}</li>
                })}
            </ul>
        </h3>
    </div>
  )
}

export default DetailsComp
