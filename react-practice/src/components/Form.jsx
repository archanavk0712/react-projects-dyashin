import { useState } from 'react'

function Form() {
  const [name, setName]= useState("");
  const [address, setAddress]= useState("");
  const [age, setAge]= useState("");
  const [submit, setSubmitted]=useState(false);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmitted(true);
    // setName("");
    // setAddress("");
    // setAge("");
  }
  
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}/> <br/>
        <label>Address:</label> 
        <input
        type="text"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}/><br/>
        <label>Age:</label> 
         <input
        type="number"
        value={age}
        onChange={(e)=>setAge(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      
      {submit && (
      <div>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>Age: {age}</p>
      </div>)
      }
    </div>
  )
}

export default Form
